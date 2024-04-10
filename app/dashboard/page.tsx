"use client";

import React from "react";
import { logout } from "../(auth)/actions";
import { createClient } from "../_utils/supabase/server";

// const supabase = createClient();

export default function DashboardHome() {
  // console.log(await supabase.auth.getUser());
  return (
    <div>
      DashboardHome
      <button onClick={() => logout()}>Sign out</button>
    </div>
  );
}
