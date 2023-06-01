import { ApplicationForm, ContactForm } from "@prisma/client";
import { useState } from "react";
import { useQuery } from "react-query";
import {
  fetchApplicationForms,
  fetchContactForms,
} from "../utilities/FetchForms";

export function useAdminMenu() {
  const [openTab, setOpenTab] = useState(1);

  const { data: allContactForms, isLoading: isContactFormLoading } = useQuery<ContactForm[]>("contactForms", fetchContactForms);
  const { data: allApplicationForms, isLoading: isApplicationFormLoading } = useQuery<ApplicationForm[]>("applicationForms", fetchApplicationForms);
  return {
    openTab,
    setOpenTab,
    allContactForms,
    allApplicationForms,
    isLoading: isContactFormLoading || isApplicationFormLoading,
  };
}
