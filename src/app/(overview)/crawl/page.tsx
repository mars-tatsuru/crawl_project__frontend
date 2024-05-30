"use client";
import type { NextPage } from "next";
import CreateButton from "@/components/Button/CreateButton";
import Card from "@/components/Card/Card";

const Crawl: NextPage = () => {
  return (
    <div className="h-full">
      <div className="mb-5">
        <CreateButton label="create new site map" />
      </div>
      <div className="flex gap-5">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Crawl;
