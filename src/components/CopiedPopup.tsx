import React, { useState } from "react";
import styles from "../styles/Popup.module.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CopiedPopup = ({ isOpen, onClose }: Props) => {
  return (
    <>
      <div className={styles.popupContainer}>
        {isOpen && (
          <>
            <div className={styles.textContainer}>
              <div className={styles.textHeader}>
                <h1 className={styles.title}>COPIED</h1>
                <button onClick={onClose}>X</button>
              </div>
              <div className={styles.color}></div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CopiedPopup;
