import { ContactForm } from "@prisma/client";
import { useState } from "react";
import { fetchContactForms } from "../utilities/FetchContactForms";
import { useQuery } from "react-query";

export function useAdminMenu() {

    const [openTab, setOpenTab] = useState(1);
    const { data: allContactForms, isLoading } = useQuery<ContactForm[]>("contactForms",fetchContactForms);

    return { openTab, setOpenTab, allContactForms, isLoading}

}
