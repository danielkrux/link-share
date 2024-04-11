"use client";

import React, { useEffect } from "react";
import { nanoid } from "nanoid";
import { useFormState } from "react-dom";

import Button from "@/app/_components/Button";
import { deleteLink, saveLinks } from "@/app/_actions/dashboard";
import NoLinks from "./NoLinks";
import PlatformSelect from "./PlatformSelect";
import Input from "@/app/_components/Input";

const isNumber = (id: string | number) => typeof id === "number";

export default function LinkList({ data }: { data: any[] }) {
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
        {links?.map((link, index) => {
          return (
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
          );
        })}
        <Button type="submit" className="w-full mt-6">
          Save
        </Button>
      </form>
    </>
  );
}
