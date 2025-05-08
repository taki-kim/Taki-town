"use client";

import styles from "./mobile-open-button.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

type MobileOpenButtonProps = {
  setOpenList: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileOpenButton({
  setOpenList,
}: MobileOpenButtonProps) {
  return (
    <div
      className={styles.wrapper}
      onClick={() => {
        setOpenList((prev) => !prev);
      }}
    >
      <FontAwesomeIcon icon={faBars} />
    </div>
  );
}
