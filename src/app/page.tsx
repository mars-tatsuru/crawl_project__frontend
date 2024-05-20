"use client";

import type { NextPage } from "next";
import styles from "@/styles/Home.module.scss";
import Flow from "@/components/Flow";
import { useRouter } from "next/router";

import { useState } from "react";

const Home: NextPage = () => {
  const [crawlResult, setCrawlResult] = useState<any>(null);
  const [siteUrl, setSiteUrl] = useState<string>("");

  const runCrawl = async () => {
    console.log("runCrawl", siteUrl);
    try {
      const response = await fetch(
        `http://localhost:8000/crawl?siteUrl=${siteUrl}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      console.log(data);
      setCrawlResult(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <input
          type="text"
          placeholder="https://~~~"
          value={siteUrl}
          onChange={(e) => setSiteUrl(e.target.value)}
        />
        <button onClick={runCrawl}>Run Crawl</button>
      </div>
      {crawlResult && (
        <div className={styles.flow}>
          <h2>Crawl Result:</h2>
          <Flow siteTree={crawlResult} />
        </div>
      )}
    </div>
  );
};

export default Home;
