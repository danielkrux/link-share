import React from "react";
import AvatarInput from "../components/AvatarInput";
import Input from "@/app/components/Input";
import Button from "@/app/components/Button";
import { getProfileData, saveProfileData } from "@/app/actions/profile.actions";
import LogoutButton from "./LogoutButton";

export default async function Profile() {
  const profile = await getProfileData();

  return (
    <div className="bg-white flex-grow rounded-lg p-6 lg:p-10">
      <h1 className="text-heading-m lg:text-heading-l mb-2">Profile Details</h1>
      <p className="mb-10 text-gray">
        Add your details to create a personal touch to your profile
      </p>
      <form action={saveProfileData}>
        <section className="bg-lightgray p-5 rounded-lg">
          <span className="text-gray block mb-4">Profile picture</span>
          <AvatarInput defaultValue={profile?.avatar_url} />
        </section>
        <section className="bg-lightgray p-5 rounded-lg mt-6 flex flex-col gap-3">
          <Input
            defaultValue={profile?.first_name}
            name="first_name"
            label="First name"
          />
          <Input
            defaultValue={profile?.last_name}
            name="last_name"
            label="Last name"
          />
          <Input defaultValue={profile?.email} name="email" label="Email" />
        </section>
        <Button className="w-full mt-6" type="submit">
          Save
        </Button>
      </form>
      <LogoutButton className="mt-14" />
    </div>
  );
}
