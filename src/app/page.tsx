import Link from "next/link";
import { Button } from "flowbite-react";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Button color="blue">
        <Link
          href="/home"
          className="flex items-center gap-2 text-2xl font-semibold"
        >
          GO TO DASHBOARD PAGE
        </Link>
      </Button>
    </main>
  );
}
