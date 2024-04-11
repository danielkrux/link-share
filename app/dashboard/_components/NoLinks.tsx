import React from "react";
import Empty from "../../../public/empty.svg";

export default function NoLinks() {
  return (
    <div className="text-gray rounded-lg mt-6 px-4 py-8 text-center bg-lightgray ">
      <Empty className="max-w-[125px] mx-auto mb-8" />
      <h1 className="text-heading-m text-darkgray mb-6">
        Let&apos;s get you started
      </h1>
      <p>
        Use the “Add new link” button to get started. Once you have more than
        one link, you can reorder and edit them. We&apos;re here to help you
        share your profiles with everyone!
      </p>
    </div>
  );
}
