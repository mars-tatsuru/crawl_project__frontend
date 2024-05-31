import Link from "next/link";
import { Button } from "flowbite-react";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Button gradientDuoTone="greenToBlue">
        <Link href="/home" className="text-xl dark:text-white">
          GO TO DASHBOARD PAGE
        </Link>
      </Button>
    </main>
  );
}
