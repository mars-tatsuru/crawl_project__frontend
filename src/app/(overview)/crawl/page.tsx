"use client";
import type { NextPage } from "next";
import CreateButton from "@/components/Button/CreateButton";
import CommonCard from "@/components/Card/CommonCard";

const Crawl: NextPage = () => {
  return (
    <div className="h-full">
      <div className="mb-5">
        <CreateButton label="create new site map" />
      </div>
      <div className="flex flex-wrap gap-5">
        <CommonCard />
        <CommonCard />
        <CommonCard />
        <CommonCard />
        <CommonCard />
        <CommonCard />
      </div>
    </div>
  );
};

export default Crawl;
