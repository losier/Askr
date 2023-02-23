import Link from "next/link";
import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <small>
          All right reserved to{" "}
          <Link
            className={styles.text}
            href="https://github.com/losier"
            target="_blank"
          >
            losier <sup>&#169;</sup>
          </Link>
        </small>
      </footer>
    </>
  );
};

export default Footer;
