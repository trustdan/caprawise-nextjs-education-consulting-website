import { useState, useLayoutEffect, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useMutation } from "react-query";
import { useLanguageContext } from "../hooks/useLanguageContext";
import { gsap } from "gsap";

const schema = z.object({
  fullName: z
    .string()
    .min(2)
    .max(100)
    .regex(/^[a-zA-ZğüşöçİĞÜŞÖÇ\s]*$/)
    .refine((value) => value.trim().length > 1),
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

  // Get the reCAPTCHA token by executing it with an action name

  const onSubmit = async (formData: FormData) => {
    if (!executeRecaptcha) {
      console.log("executeRecaptcha not yet available");
      throw new Error("executeRecaptcha not yet available");
    }
    const token = await executeRecaptcha("submit");
    const response = await fetch("/api/submit-contact-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData, token }),
    });

    return response;
  };

  async function handleMutationSubmit(formData: {
    fullName: string;
    email: string;
    phone: string;
    question: string;
  }) {
    await formSubmissionMutation.mutateAsync(formData);
  }

  const formSubmissionMutation = useMutation(onSubmit, {
    onSuccess: (response) => {
      const data = response.json();//for future debugging
      console.log("on success block got triggered!");
      setIsModalOpen(true);
      if (response.status === 200) {
        reset();
      }
    },
    onError: (error) => {
      console.log(error);
      throw new Error(error as string);
    },
  });

  useLayoutEffect(() => {
    gsap.fromTo(
      contactFormRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
  }, []);

  return {
    register,
    handleMutationSubmit,
    handleSubmit,
    errors,
    isModalOpen,
    setIsModalOpen,
    language,
    formSubmissionMutation,
    contactFormRef,
  };
}
