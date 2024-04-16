import React from "react";
import Input from "@/components/ui/Input";
import { getProfileData, saveProfileData } from "@/actions/profile.actions";
import SubmitButton from "@/components/SubmitButton";

import AvatarInput from "../components/AvatarInput";
import LogoutButton from "./LogoutButton";

export default async function Profile() {
  const profile = await getProfileData();

  return (
    <div className="relative bg-white flex-grow rounded-lg ">
      <div className="flex justify-between p-6 lg:p-10">
        <div>
          <h1 className="text-heading-m lg:text-heading-l mb-2">
            Profile Details
          </h1>
          <p className="text-gray">
            Add your details to create a personal touch to your profile
          </p>
        </div>
        <LogoutButton className="hidden lg:block" />
      </div>
      <form action={saveProfileData} className="mx-6 lg:mx-10">
        <section className="bg-lightgray p-5 rounded-lg">
          <span className="text-gray block mb-4">Profile picture</span>
          <AvatarInput defaultValue={profile?.avatar_url ?? ""} />
        </section>
        <section className="bg-lightgray p-5 rounded-lg mt-6 flex flex-col gap-3">
          <Input
            defaultValue={profile?.first_name ?? ""}
            name="first_name"
            label="First name"
          />
          <Input
            defaultValue={profile?.last_name ?? ""}
            name="last_name"
            label="Last name"
          />
          <Input defaultValue={profile?.email} name="email" label="Email" />
        </section>
        <div className="flex absolute bottom-0 left-0 right-0 lg:justify-end bg-white p-6 border-t border-borders">
          <SubmitButton className="w-full lg:w-auto" />
        </div>
      </form>
      <LogoutButton className="block lg:hidden mt-6 mx-6 lg:mx-10" />
    </div>
  );
}
