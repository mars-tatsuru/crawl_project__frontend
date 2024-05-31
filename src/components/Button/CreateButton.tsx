import Link from "next/link";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Button } from "flowbite-react";

type Props = {
  label: string;
};

export default function CreateButton({ label }: Props) {
  return (
    <Link href="/crawl/create" className="inline-flex">
      <Button gradientDuoTone="greenToBlue" label="2">
        {label}
        <PlusIcon className="ml-1 w-4" />
      </Button>
    </Link>
  );
}
