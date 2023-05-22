import React from "react";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useMutation } from "react-query";
import { useLanguageContext } from "../hooks/useLanguageContext";
import { gsap } from "gsap";

const schema = z.object({
  fullName: z.string().min(1).max(100),
  email: z.string().email(),
  phone: z
    .string()
    .min(10)
    .regex(/^[0-9]+$/),
  question: z.string().min(50).max(1000),
});

type FormData = z.infer<typeof schema>;

export function useCustomForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const language = useLanguageContext().language;
  const contactFormRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onTouched",
  });

  const { executeRecaptcha } = useGoogleReCaptcha();

  // Define a mutation function that takes an object with formData and token as properties and returns a promise
  const submitForm = ({
    formData,
    token,
  }: {
    formData: FormData;
    token: string;
  }) => {
    return fetch("/api/submit-contact-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData: formData, token: token }),
    });
  };

  // Use the useMutation hook to create a mutation object with the submitForm function
  const mutation = useMutation(submitForm);

  // Define a submit handler that calls the mutation function with an object with formData and token as properties
  const onSubmit = async (formData: FormData) => {
    if (!executeRecaptcha) {
      console.log("executeRecaptcha not yet available");
      return;
    }

    // Get the reCAPTCHA token by executing it with an action name
    const token = await executeRecaptcha("submit");

    // Call the mutation function with an object with formData and token as properties
    mutation.mutate({ formData, token });
  };

  // Use the mutation status and data to handle the form submission result
  useEffect(() => {
    if (mutation.isSuccess) {
      setIsModalOpen(true); // Open the modal
      // Check if the response is successful or not. Clean the form if successful. Keep the values if not.
      if (mutation.data.status === 200) {
        reset(
          { fullName: "", email: "", phone: "", question: "" },
          { keepValues: false }
        ); // Reset the form
      }
    }
  }, [mutation.isSuccess, mutation.data]);

  useLayoutEffect(() => {
    gsap.fromTo(
      contactFormRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
  }, []);

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    isModalOpen,
    setIsModalOpen,
    language,
    mutation,
    contactFormRef,
  };
}
