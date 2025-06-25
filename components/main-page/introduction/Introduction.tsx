import React from "react";
import TextAutoSlider from "./text-auto-slider/TextAutoSlider";

import styles from "./introduction.module.scss";
import NavButton from "../../button/nav-button";
import HoverTextItem from "./hover-text-item/HoverTextItem";

export default function Introduction() {
  return (
    <>
      <main className={styles["wrapper"]}>
        <div className={`${styles["text-wrapper"]}`}>
          Web developer Taki,
          <br />
          <div className={styles["focus-line"]}>
            <span>focused on</span>
            <span>&nbsp;</span>
            <HoverTextItem label="Fast Web" emoji="⚡️" />
            {","}
            <span>&nbsp;</span>
            <HoverTextItem label="Intuitive UI" emoji="🚦" />
            {", and"}
            <span>&nbsp;</span>
            <HoverTextItem label="Better UX" emoji="📱" />
            {"."}
          </div>
          <div className={styles["carousel-text-wrapper"]}>
            Building with <TextAutoSlider />
          </div>
        </div>
        <div className={styles["button-wrapper"]}>
          <NavButton text="About Me" size="medium" link="/about" />
        </div>
      </main>
    </>
  );
}
