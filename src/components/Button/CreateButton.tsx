import Link from "next/link";
import { PlusIcon } from "@heroicons/react/24/outline";

type Props = {
  label: string;
};

export default function CreateButton({ label }: Props) {
  return (
    <button className="rounded bg-blue-500 font-bold text-white  hover:bg-blue-700">
      <Link
        href="/crawl/create"
        className="flex items-center px-4 py-2 text-sm"
      >
        {label}
        <PlusIcon className="ml-1 w-4" />
      </Link>
    </button>
  );
}
