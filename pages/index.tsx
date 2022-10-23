import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import { useState, useEffect } from "react";

import truth_text from "../json_text_files/truth.json";
import dare_text from "../json_text_files/dare.json";
import flirt_text from "../json_text_files/flirt.json";
import topic_text from "../json_text_files/topic.json";
import nickname_text from "../json_text_files/nickname.json";
import neverHaveIEver_text from "../json_text_files/never_have_i_ever.json";
import wouldYouRather_text from "../json_text_files/would_you_rather.json";

const Home: NextPage = () => {
  const [data, setData] = useState(["Click the button to load data"]);
  const [displayNHIE, setDisplayNHIE] = useState(false);

  const randomTruth = truth_text[Math.floor(Math.random() * truth_text.length)];
  const randomDare = dare_text[Math.floor(Math.random() * dare_text.length)];
  const randomFlirt = flirt_text[Math.floor(Math.random() * flirt_text.length)];
  const randomTopic = topic_text[Math.floor(Math.random() * topic_text.length)];
  const randomNickname =
    nickname_text[Math.floor(Math.random() * nickname_text.length)];
  const randomNeverHaveIEver =
    neverHaveIEver_text[Math.floor(Math.random() * neverHaveIEver_text.length)];
  const randomWouldYouRather =
    wouldYouRather_text[Math.floor(Math.random() * wouldYouRather_text.length)];

  return (
    <div className={styles.container}>
      <Head>
        <title>Text 0</title>
        <meta
          name="description"
          content="A simple webapp to generate random chat related text"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Text<a>{`'O'`}</a>
        </h1>

        <p className={styles.main_content}>
          <span
            style={{
              display: displayNHIE ? "block" : "none",
            }}
          >
            Never Have I Ever{" "}
          </span>
          <code className={styles.code}>{data}</code>
        </p>
        <div className={styles.grid}>
          <a
            onClick={() => {
              setData([randomTruth]);
              setDisplayNHIE(false);
            }}
            className={styles.card}
          >
            <h2>Truth</h2>
          </a>
          <a
            onClick={() => {
              setData([randomTopic]);
              setDisplayNHIE(false);
            }}
            className={styles.card}
          >
            <h2>Topic</h2>
          </a>
          <a
            onClick={() => {
              setData([randomDare]);
              setDisplayNHIE(false);
            }}
            className={styles.card}
          >
            <h2>Dare</h2>
          </a>
          <a
            onClick={() => {
              setData([randomFlirt]);
              setDisplayNHIE(false);
            }}
            className={styles.card}
          >
            <h2>Flirt </h2>
          </a>
          <a
            onClick={() => {
              setData([randomWouldYouRather]);
              setDisplayNHIE(false);
            }}
            className={styles.card}
          >
            <h2>Would you rather</h2>
          </a>
          <a
            onClick={() => {
              setData([randomNickname]);
              setDisplayNHIE(false);
            }}
            className={styles.card}
          >
            <h2>Nickname</h2>
          </a>
          <a
            onClick={() => {
              setData([randomNeverHaveIEver]);
              setDisplayNHIE(true);
            }}
            className={styles.card}
          >
            <h2>Never Have I Ever</h2>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          All rights reserved to{" "}
          <span className={styles.logo}>&copy; Losier</span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
