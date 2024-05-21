"use client";
import type { NextPage } from "next";
import Flow from "@/components/Flow/index";
import styles from "@/styles/Home.module.scss";
// import siteTree from "../../site_tree.json";
import "reactflow/dist/style.css";
import { useState, useEffect } from "react";

const Home: NextPage = () => {
  const [siteTree, setSiteTree] = useState();
  const [siteUrl, setSiteUrl] = useState("");
  const [isCrawling, setIsCrawling] = useState(false);

  const runCrawl = async () => {
    setIsCrawling(true);
    try {
      const response = await fetch(
        `http://localhost:8000/crawl?siteUrl=${siteUrl}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setSiteTree(data);
      setIsCrawling(false);
    } catch (error) {
      console.log(error);
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
      {isCrawling && <div className={styles.loading}>Crawling...</div>}
      {siteTree && <Flow siteTree={siteTree} />}
    </div>
  );
};

export default Home;
