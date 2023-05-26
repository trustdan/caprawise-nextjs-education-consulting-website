"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAdminMenu } from "../hooks/useAdminMenu";
import Spinner from "./Spinner";
import AdminTable from "./AdminTable";

export default function AdminMenu() {
  const { openTab, setOpenTab, allContactForms, isLoading } = useAdminMenu();

  const MENU_ITEMS = [
    {
      name: "Contact Form Records",
      text: allContactForms,
      href: "#link1",
      current: true,
    },
    {
      name: "Application Form Records",
      // TO-DO update this to application form in the db
      text: allContactForms,
      href: "#link2",
      current: false,
    },
  ];
  return (
    <>
      <div className="flex flex-wrap overflow-y-auto h-[calc(100dvh-270px)]">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap  pb-4 flex-row sticky top-0 bg-white z-10"
            role="tablist"
          >
            {MENU_ITEMS.map((item, index) => (
              <li
                className="-mb-px mr-2 last:mr-0 flex-auto text-center"
                key={index}
              >
                <Link
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === index + 1
                      ? "text-blue bg-red-400"
                      : "text-black bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(index + 1);
                  }}
                  data-toggle="tab"
                  href={item.href}
                  role="tablist"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded pb-5">
            <div className="p-5 flex-auto">
              <div className="tab-content tab-space">
                {MENU_ITEMS.map((item, index) => (
                  <div
                    className={openTab === index + 1 ? "block" : "hidden"}
                    id={item.href}
                    key={index}
                  >
                    {isLoading ? (
                      <Spinner /> // Render the Spinner component while loading
                    ) : (
                      <AdminTable data={item.text} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
