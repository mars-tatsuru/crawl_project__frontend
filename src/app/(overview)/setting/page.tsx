import { Suspense } from "react";
import { Button } from "flowbite-react";
import Link from "next/link";

export default async function Page() {
  return (
    <main>
      <h1 className={"mb-4 text-xl md:text-2xl"}>Setting</h1>
      <Button color="gray">
        <Link href="/home">go to home</Link>
      </Button>
    </main>
  );
}
