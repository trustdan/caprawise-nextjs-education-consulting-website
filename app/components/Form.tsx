"use client";
import React from "react";
import BasicModal from "./BasicModal";
import { useCustomForm } from "../hooks/useCustomForm";
import PrimaryButton from "./PrimaryButton";
import Spinner from "./Spinner";

export default function Form() {
  const {
    register,
    handleMutationSubmit,
    handleSubmit,
    errors,
    isModalOpen,
    setIsModalOpen,
    formSubmissionMutation,
    language,
    contactFormRef,
  } = useCustomForm(); //this is a custom hook for abstracting the form logic

  return (
    <form
      onSubmit={handleSubmit(handleMutationSubmit)}
      className="max-w-sm md:max-w-xl mx-auto p-0 m-0"
      ref={contactFormRef}
    >
      <div className="mb-4">
        <label htmlFor="fullName" className="block font-medium mb-2">
          {language === "en" ? "Full Name" : "Adınız-Soyadınız"}
        </label>
        <input
          id="fullName"
          type="text"
          {...register("fullName")} // Register the input with React Hook Form
          className="w-full border-none rounded px-3 py-2 focus:outline-none focus:border-none"
        />
        {errors.fullName && ( // Show the error message if any
          <p className="text-sm text-red-500 mt-1">
            {language === "en"
              ? errors.fullName.message
                  ?.replace("String", "Your name")
                  .replace("character(s)", "non-numeric characters")
              : "Adınız en az iki harften oluşmalı ve numerik karakter içermemelidir"}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block font-medium mb-2">
          {language === "en" ? "Email" : "Email Adresiniz"}
        </label>
        <input
          id="email"
          type="email"
          {...register("email")} // Register the input with React Hook Form
          className="w-full border-none rounded px-3 py-2 focus:outline-none focus:border-none"
        />
        {errors.email && ( // Show the error message if any
          <p className="text-sm text-red-500 mt-1">
            {language === "en" ? errors.email.message : "Geçersiz email"}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block font-medium mb-2">
          {language === "en" ? "Phone Number" : "Telefon Numaranız"}
        </label>
        <input
          id="phone"
          type="tel"
          {...register("phone")} // Register the input with React Hook Form
          className="w-full border-none rounded px-3 py-2 focus:outline-none focus:border-none"
        />
        {errors.phone && ( // Show the error message if any
          <p className="text-sm text-red-500 mt-1">
            {language === "en"
              ? "Your contact number must be at least 10 digits"
              : "Telefon numaranız en az 10 numerik karakterden oluşmalı"}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="question" className="block font-medium mb-2">
          {language === "en" ? "Question" : "Sorunuz"}
        </label>
        <textarea
          id="question"
          rows={5}
          {...register("question")} // Register the input with React Hook Form
          className="w-full border-none rounded px-3 py-2 focus:outline-none"
        />
        {errors.question && ( // Show the error message if any
          <p className="text-sm text-red-500 mt-1">
            {language === "en"
              ? errors.question.message?.replace(
                  "String",
                  "Your question/inquiry"
                )
              : "Sorunuz/talebiniz en az 50 karakter uzunluğunda olmalı"}
          </p>
        )}
      </div>
      {formSubmissionMutation.isLoading ? (
        <Spinner />
      ) : (
        <PrimaryButton
          type="submit"
          label={{ en: "Submit", tr: "Gönder" }}
          className="w-full"
        />
      )}
      <BasicModal
        open={isModalOpen}
        header={{ success: "🥳 ", failure: " 😞 " }}
        onClose={() => setIsModalOpen(false)}
        formStatus={formSubmissionMutation.data?.status}
        output={
          language === "en"
            ? {
                success:
                  "Your form has been submitted succesfully!\nWe will be in touch shortly.",
                failure:
                  "There was an error submitting your form.\nPlease try again later...",
              }
            : {
                success:
                  "Formunuz bize ulaştı!\nEn kısa sürede size geri dönüş sağlayacağız.",
                failure:
                  "Maalesef formunuzu gönderirken bir hata oluştu.\nLütfen daha sonra tekrar deneyiniz...",
              }
        }
      />
    </form>
  );
}
