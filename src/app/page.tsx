import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Link
        href="/dashboard"
        className="flex items-center text-4xl font-semibold gap-2"
      >
        GO TO DASHBOARD PAGE
      </Link>
    </main>
  );
}
