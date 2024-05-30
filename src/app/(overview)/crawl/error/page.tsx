"use client";
import { NextPage } from "next";
import Link from "next/link";

const Crawl: NextPage = () => {
  return (
    <div className="h-full">
      <h2>Crawl error</h2>
      <p>
        You failed crawl request for server.
        <br />
        You should go back create page and try again.
      </p>
      <Link href="/crawl/create">go back create page</Link>
    </div>
  );
};

export default Crawl;
