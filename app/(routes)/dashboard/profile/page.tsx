import React from "react";
import AvatarInput from "../components/AvatarInput";
import { getUserServer } from "@/app/actions/auth.actions";
import Input from "@/app/components/Input";
import Button from "@/app/components/Button";
import { saveProfileData } from "@/app/actions/profile.actions";
import LogoutButton from "./LogoutButton";

export default async function Profile() {
  const user = await getUserServer();

  return (
    <div className="bg-white rounded-lg p-6">
      <h1 className="text-heading-m mb-2">Profile Details</h1>
      <p className="mb-10">
        Add your details to create a personal touch to your profile
      </p>
      <form action={saveProfileData}>
        <section className="bg-lightgray p-5 rounded-lg">
          <span className="text-gray block mb-4">Profile picture</span>
          <AvatarInput />
        </section>
        <section className="bg-lightgray p-5 rounded-lg mt-6 flex flex-col gap-3">
          <Input name="first_name" label="First name" />
          <Input name="last_name" label="Last name" />
          <Input name="email" label="Email" />
        </section>
        <Button className="w-full mt-6" type="submit">
          Save
        </Button>
      </form>
      <LogoutButton className="mt-14" />
    </div>
  );
}
