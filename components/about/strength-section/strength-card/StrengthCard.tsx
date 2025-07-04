"use client";
import React from "react";
import styles from "./StrengthCard.module.scss";
import Image from "next/image";

type StrengthCardProps = {
  image: string;
  title: string;
  description: string;
  ref: React.RefObject<HTMLDivElement>;
  className: string;
};

export default function StrengthCard({
  image,
  title,
  description,
  className,
}: StrengthCardProps) {
  return (
    <div className={`${styles["wrapper"]} ${className}`}>
      <div className={styles["image-wrapper"]}>
        <Image src={image} alt={title} fill />
      </div>
      <h1 className={styles["title"]}>{title}</h1>
      <p className={styles["description"]}>{description}</p>
    </div>
  );
}
