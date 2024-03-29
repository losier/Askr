import React, { useState } from "react";
import styles from "../styles/Body.module.css";
import CopiedPopup from "./CopiedPopup";

const Body = () => {
  const [text, setText] = useState("Click a button to see the text...");
  const [copied, setCopied] = useState(false);

  const getTruth = () => {
    fetch("api/truth")
      .then((res) => res.json())
      .then((data) => {
        setText(data.text);
      });
  };

  const getFlirt = () => {
    fetch("api/flirt")
      .then((res) => res.json())
      .then((data) => {
        setText(data.text);
      });
  };

  const getDare = () => {
    fetch("api/dare")
      .then((res) => res.json())
      .then((data) => {
        setText(data.text);
      });
  };

  const getTopic = () => {
    fetch("api/topic")
      .then((res) => res.json())
      .then((data) => {
        setText(data.text);
      });
  };

  const getNickname = () => {
    fetch("api/nickname")
      .then((res) => res.json())
      .then((data) => {
        setText(data.text);
      });
  };

  const getNever = () => {
    fetch("api/nhie")
      .then((res) => res.json())
      .then((data) => {
        setText(`Neve have I ever ${data.text}`);
      });
  };

  const getWould = () => {
    fetch("api/wyr")
      .then((res) => res.json())
      .then((data) => {
        setText(`Would you rather ${data.text}`);
      });
  };

  const getAdvice = () => {
    fetch("api/advice")
      .then((res) => res.json())
      .then((data) => {
        setText(data.text);
      });
  };

  const closePopup = () => {
    setCopied(false);
  };

  return (
    <>
      <div className={styles.bodyContainer}>
        <div className={styles.textShowcase}>
          <p>{text}</p>
          <a
            onClick={() => {
              navigator.clipboard.writeText(text);
              setCopied(true);
              setTimeout(() => {
                setCopied(false);
              }, 3000);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-clipboard"
              viewBox="0 0 16 16"
            >
              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
            </svg>
          </a>
        </div>
        <span
          style={copied ? { display: "block" } : { display: "none" }}
          className={styles.copied}
        >
          <CopiedPopup isOpen={copied} onClose={closePopup} />
        </span>
        <div className={styles.btnShowcase}>
          <button onClick={getTruth} className={styles.btns}>
            Truth
          </button>
          <button onClick={getTopic} className={styles.btns}>
            Topic
          </button>
          <button onClick={getDare} className={styles.btns}>
            Dare
          </button>
          <button onClick={getNickname} className={styles.btns}>
            Nickname
          </button>
          <button onClick={getFlirt} className={styles.btns}>
            Flirt
          </button>
          <button onClick={getAdvice} className={styles.btns}>
            Advice
          </button>
          <button onClick={getNever} className={styles.btns}>
            Never have I ever
          </button>
          <button onClick={getWould} className={styles.btns}>
            Would you rather
          </button>
        </div>
      </div>
    </>
  );
};

export default Body;
