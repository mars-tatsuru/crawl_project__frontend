"use client";

import { createClient } from "@/utils/supabase/client";
import { Button } from "flowbite-react";
import ArrowUpRightIcon from "@heroicons/react/24/outline/ArrowUpRightIcon";

export default function Login() {
  const supabase = createClient();

  const handleSocialLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
        redirectTo: "http://localhost:3000/home",
      },
    });

    if (error) {
      console.log(error);
      return;
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Button
        className="inline-flex items-center"
        gradientDuoTone="greenToBlue"
        size="xl"
        label="4"
        onClick={handleSocialLogin}
      >
        <span>Google login</span>
        <ArrowUpRightIcon className="ml-3 w-4" />
      </Button>
    </div>
  );
}
