"use client";
import type { NextPage } from "next";
import Flow from "@/components/ReactFlow/index";
import "reactflow/dist/style.css";
import { useState } from "react";
import clsx from "clsx";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

const Crawl: NextPage = () => {
  const [siteTree, setSiteTree] = useState();
  const [siteUrl, setSiteUrl] = useState("");
  const [isCrawling, setIsCrawling] = useState(false);

  const runCrawl = async () => {
    setIsCrawling(true);
    try {
      const response = await fetch(
        // TODO: Change the URL to the crawling server URL
        `http://localhost:8080/crawl?siteUrl=${siteUrl}`,
        // `https://crawl-project--backend.fly.dev/crawl?siteUrl=${siteUrl}`,
        {
          method: "GET",
        },
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Get the response from the crawling server
      const data = await response.json();
      const domainName = data.message;

      // Create an S3 client
      const client = new S3Client({
        region: process.env.NEXT_PUBLIC_REGION,
        credentials: {
          accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID as string,
          secretAccessKey: process.env
            .NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY as string,
        },
      });

      // Get the site tree from the S3 bucket
      const command = new GetObjectCommand({
        Bucket: `${process.env.NEXT_PUBLIC_BUCKETNAME}`,
        Key: `${process.env.NEXT_PUBLIC_FILEPATH}/tree/${domainName}.json`,
      });
      const jsonData = await client
        .send(command)
        .then((data) => {
          return data.Body?.transformToString();
        })
        .catch((error) => {
          console.log(error);
          return;
        });

      setSiteTree(JSON.parse(jsonData!));
      setIsCrawling(false);
    } catch (error) {
      console.log(error);
      setIsCrawling(false);
    }
  };

  return (
    <div className="h-full">
      {!siteTree && !isCrawling && (
        <div className="flex w-1/2 flex-col rounded-md bg-gray-800 p-5">
          <div className="mb-10">
            <h2 className="mb-2 text-2xl">input crawl url</h2>
            <p className="text-sm">input url that you want to crawl.</p>
          </div>
          <input
            type="text"
            placeholder="https://~~~~~~~"
            onChange={(e) => setSiteUrl(e.target.value)}
            className="mb-4 h-10 w-full rounded-md border border-gray-500 bg-transparent p-2 text-white focus:border-blue-500 focus:outline-none"
          />
          <button
            onClick={runCrawl}
            className={clsx(
              "h-10 rounded-sm bg-blue-500 font-bold text-white",
              {
                "cursor-not-allowed opacity-50": !siteUrl,
                "cursor-pointer opacity-100 hover:bg-blue-700": siteUrl,
              },
            )}
            disabled={!siteUrl}
          >
            Run Crawl
          </button>
        </div>
      )}
      {isCrawling && (
        <div className="flex h-full flex-col items-center justify-center">
          <ArrowPathIcon className="h-20 w-20 animate-spin" />
          <h2 className="text-2xl">Crawling</h2>
        </div>
      )}
      {siteTree && <Flow siteTree={siteTree} />}
    </div>
  );
};

export default Crawl;
