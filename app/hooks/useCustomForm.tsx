import { useState, useLayoutEffect, useRef } from "react";
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

  // Define a mutation function that takes an object with formData and token as properties and returns a promise
  const submitForm = async ({
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
  const formSubmissionMutation = useMutation(submitForm, {
    onSuccess: (data) => {
      setIsModalOpen(true); // Open the modal
      // Check if the response is successful or not. Clean the form if successful. Keep the values if not.
      if (data.status === 200) {
        reset(
          { fullName: "", email: "", phone: "", question: "" },
          { keepValues: false }
        );
      } else {
        console.log(data.statusText, data.status);
        throw new Error("Error while submitting the form");
      }
    },
    onError: (error) => {
      console.log(error);
      throw new Error("Error while executing formSubmissionMutation");
    },
  });

  const sendConfirmationEmail = async ({
    formData,
  }: {
    formData: FormData;
  }) => {
    return fetch("/api/send-contact-form-submission-emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData: formData }),
    });
  };

  //mutation for sending confirmation email after the form submission
  const sendConfirmationEmailMutation = useMutation(sendConfirmationEmail, {
    onSuccess: (data) => {
      console.log("Data sent in the email confirmation is: ", data.json());
      if (data.status === 200) {
        console.log("Email sent successfully");
      } else {
        console.log(
          "Email sending failed. Error: ",
          data.statusText,
          data.status
        );
        throw new Error("Error while sending email confirmation");
      }
    },
    onError: (error) => {
      console.log(error);
      throw new Error("Error while executing sendConfirmationEmailMutation");
    },
  });

  // Define a submit handler that calls the mutation function with an object with formData and token as properties
  const onSubmit = async (formData: FormData) => {
    if (!executeRecaptcha) {
      console.log("executeRecaptcha not yet available");
      throw new Error("executeRecaptcha not yet available");
    }

    // Get the reCAPTCHA token by executing it with an action name
    const token = await executeRecaptcha("submit");

    // Call the mutation function with an object with formData and token as properties
    formSubmissionMutation.mutate({ formData, token });
    try {
      const emailResponse = await sendConfirmationEmailMutation.mutateAsync({
        formData,
      });
      console.log("Email_response is: ", emailResponse);
    } catch (error) {
      console.log(error);
      throw new Error("Error while sending email confirmation");
    }
  };

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
    formSubmissionMutation,
    sendConfirmationEmailMutation,
    contactFormRef,
  };
}
