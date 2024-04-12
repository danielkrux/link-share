"use client";

import React, { useEffect } from "react";
import { nanoid } from "nanoid";
import { useFormState } from "react-dom";

import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import { deleteLink, saveLinks } from "@/app/actions/dashboard";
import NoLinks from "./NoLinks";
import PlatformSelect from "./PlatformSelect";
import SubmitButton from "../../../components/SubmitButton";

const isNumber = (id: string | number) => typeof id === "number";

export default function LinkForm({ data }: { data: any[] }) {
  const [state, formAction] = useFormState(saveLinks, data);
  const [links, setLinks] = React.useState(data);

  useEffect(() => {
    setLinks(state as any[]);
  }, [state]);

  function addLink() {
    setLinks((prev) => [
      ...prev,
      {
        id: nanoid(),
        name: "",
        url: "",
      },
    ]);
  }

  async function removeLink(id: string | number) {
    setLinks((prev) => prev.filter((link) => link.id !== id));
    if (typeof id === "number") {
      await deleteLink(id);
    }
  }

  return (
    <>
      {!links?.length && <NoLinks />}
      <Button onClick={addLink} className="w-full" variant="secondary">
        Add new link
      </Button>
      <form action={formAction}>
        {links?.map((link, index) => (
          <div
            key={link.id}
            className="text-gray rounded-lg mt-6 px-4 py-8 bg-lightgray flex flex-col gap-3"
          >
            <div className="flex row items-center justify-between">
              <h2 className="text-heading-s">Link #{index + 1}</h2>
              <Button
                onClick={() => removeLink(link.id)}
                className="mt-2"
                variant="ghost"
                type="button"
              >
                Delete
              </Button>
            </div>
            <PlatformSelect defaultValue={link.name} />
            <input
              type="hidden"
              name="id"
              value={isNumber(link.id) ? link.id : ""}
            />
            <Input label="Link" name="url" defaultValue={link.url} />
          </div>
        ))}
        <SubmitButton />
      </form>
    </>
  );
}