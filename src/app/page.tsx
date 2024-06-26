"use client";
import type { NextPage } from "next";
import Flow from "@/components/Flow/index";
import styles from "@/styles/Home.module.scss";
import Image from "next/image";
import "reactflow/dist/style.css";
import { useState, useEffect } from "react";
import {
  PutObjectCommand,
  S3Client,
  GetObjectCommand,
  CreateMultipartUploadCommand,
} from "@aws-sdk/client-s3";

const Home: NextPage = () => {
  const [siteTree, setSiteTree] = useState();
  const [siteUrl, setSiteUrl] = useState("");
  const [isCrawling, setIsCrawling] = useState(false);

  const runCrawl = async () => {
    setIsCrawling(true);
    try {
      const response = await fetch(
        // TODO: Change the URL to the crawling server URL
        // `http://localhost:8080/crawl?siteUrl=${siteUrl}`,
        `https://crawl-project--backend.fly.dev/crawl?siteUrl=${siteUrl}`,
        {
          method: "GET",
        }
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
    <div className={styles.container}>
      {!siteTree && !isCrawling && (
        <div className={styles.form}>
          <h2>input crawl url</h2>
          <input
            type="text"
            placeholder="https://~~~~~~~"
            onChange={(e) => setSiteUrl(e.target.value)}
          />
          <button onClick={runCrawl}>Run Crawl</button>
        </div>
      )}
      {isCrawling && (
        <div className={styles.loadingWrapper}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="2" r="0" fill="currentColor">
              <animate
                attributeName="r"
                begin="0"
                calcMode="spline"
                dur="1s"
                keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                repeatCount="indefinite"
                values="0;2;0;0"
              />
            </circle>
            <circle
              cx="12"
              cy="2"
              r="0"
              fill="currentColor"
              transform="rotate(45 12 12)"
            >
              <animate
                attributeName="r"
                begin="0.125s"
                calcMode="spline"
                dur="1s"
                keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                repeatCount="indefinite"
                values="0;2;0;0"
              />
            </circle>
            <circle
              cx="12"
              cy="2"
              r="0"
              fill="currentColor"
              transform="rotate(90 12 12)"
            >
              <animate
                attributeName="r"
                begin="0.25s"
                calcMode="spline"
                dur="1s"
                keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                repeatCount="indefinite"
                values="0;2;0;0"
              />
            </circle>
            <circle
              cx="12"
              cy="2"
              r="0"
              fill="currentColor"
              transform="rotate(135 12 12)"
            >
              <animate
                attributeName="r"
                begin="0.375s"
                calcMode="spline"
                dur="1s"
                keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                repeatCount="indefinite"
                values="0;2;0;0"
              />
            </circle>
            <circle
              cx="12"
              cy="2"
              r="0"
              fill="currentColor"
              transform="rotate(180 12 12)"
            >
              <animate
                attributeName="r"
                begin="0.5s"
                calcMode="spline"
                dur="1s"
                keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                repeatCount="indefinite"
                values="0;2;0;0"
              />
            </circle>
            <circle
              cx="12"
              cy="2"
              r="0"
              fill="currentColor"
              transform="rotate(225 12 12)"
            >
              <animate
                attributeName="r"
                begin="0.625s"
                calcMode="spline"
                dur="1s"
                keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                repeatCount="indefinite"
                values="0;2;0;0"
              />
            </circle>
            <circle
              cx="12"
              cy="2"
              r="0"
              fill="currentColor"
              transform="rotate(270 12 12)"
            >
              <animate
                attributeName="r"
                begin="0.75s"
                calcMode="spline"
                dur="1s"
                keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                repeatCount="indefinite"
                values="0;2;0;0"
              />
            </circle>
            <circle
              cx="12"
              cy="2"
              r="0"
              fill="currentColor"
              transform="rotate(315 12 12)"
            >
              <animate
                attributeName="r"
                begin="0.875s"
                calcMode="spline"
                dur="1s"
                keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                repeatCount="indefinite"
                values="0;2;0;0"
              />
            </circle>
          </svg>
          <h2 className={styles.loading}>Crawling</h2>
        </div>
      )}

      {siteTree && <Flow siteTree={siteTree} />}
    </div>
  );
};

export default Home;
