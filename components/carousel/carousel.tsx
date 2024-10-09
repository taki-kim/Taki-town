"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./carousel.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import { PostDataProps } from "@/type";

export default function Carousel({ data }: { data: PostDataProps[] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFirstImage, setIsfirstImage] = useState(true);
  const [isLastImage, setIsLastImage] = useState(false);
  const [postTitle, setPostTitle] = useState("");

  function movePrev() {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((prevIndex) => prevIndex - 1);
    } else if (currentImageIndex == 0) {
      return null;
    }
  }

  function moveNext() {
    if (currentImageIndex < data.length - 1) {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    } else {
      null;
    }
  }

  useEffect(() => {
    if (currentImageIndex == data.length - 1) {
      setIsfirstImage(false);
      setIsLastImage(true);
    } else if (currentImageIndex == 0) {
      setIsfirstImage(true);
      setIsLastImage(false);
    } else {
      setIsfirstImage(false);
      setIsLastImage(false);
    }

    setPostTitle(data[currentImageIndex]?.title);
  }, [currentImageIndex]);

  useEffect(() => {
    setPostTitle(data[0]?.title);
  }, [data]);

  return (
    <div className={styles["carousel-container"]}>
      <div className={`${styles["post-title"]}`}>
        <Link href={`/${postTitle}`} className={styles["link"]}>
          {postTitle}
        </Link>
      </div>
      <div className={styles["angle-prev"]} onClick={movePrev}>
        <FontAwesomeIcon
          icon={faAngleLeft}
          style={isFirstImage ? { color: "gray" } : {}}
        />
      </div>
      <div className={styles["angle-next"]} onClick={moveNext}>
        <FontAwesomeIcon
          icon={faAngleRight}
          style={isLastImage ? { color: "gray" } : {}}
        />
      </div>

      <div
        className={styles["carousel-images"]}
        style={{
          transform: `translateX(-${currentImageIndex * 100}%)`,
        }}
      >
        {data?.map((item, index) => (
          <div key={index} className={styles["carousel-image"]}>
            <Image src={item.imageLink} alt={`Image ${index + 1}`} fill />
          </div>
        ))}
      </div>
    </div>
  );
}
