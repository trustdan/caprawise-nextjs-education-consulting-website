import React from "react";

export default function PageStyler({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" bg-LIGHT_PRIMARY_BG_COLOR dark:bg-DARK_PRIMARY_BG_COLOR text-black dark:text-white">
      {children}
    </div>
  );
}
