import Link from "next/link";
import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.navLogo}>Askr</div>
      <div className={styles.navMenu}>
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className={styles.hamburger}>
          &#9776;
        </label>
        <div className={styles.menu}>
          <Link className={styles.navBtn} href="/">
            Home
          </Link>
          <Link
            className={styles.navBtn}
            href="https://github.com/losier/Askr/issues/new/"
            target={"_blank"}
          >
            Issue
          </Link>
          <Link className={styles.navBtn} href="/documentation">
            Docs
          </Link>
          <Link className={styles.navBtn} href="/request">
            Request
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
