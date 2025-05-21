"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import styles from "./carousel.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import { PostDataProps } from "@/type";
import { truncateString } from "@/utils/string";

export default function Carousel({ data }: { data: PostDataProps[] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFirstImage, setIsfirstImage] = useState(true);
  const [isLastImage, setIsLastImage] = useState(false);

  const router = useRouter();

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
  }, [currentImageIndex, data.length]);

  return (
    <div className={styles["carousel-container"]}>
      <div className={styles["titles-container"]}>
        {data?.map((item, index) => (
          <div
            key={index}
            className={`${styles["post-title"]} ${
              index === currentImageIndex ? styles["active"] : ""
            }`}
          >
            <Link href={`/post/${item.title}`} className={styles["link"]}>
              {truncateString(33, item.title)}
            </Link>
          </div>
        ))}
      </div>
      <div
        className={`${styles["angle-button"]} ${styles["angle-prev"]} ${
          isFirstImage ? styles["angle-locked"] : ""
        }`}
        onClick={movePrev}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </div>
      <div
        className={`${styles["angle-button"]} ${styles["angle-next"]} ${
          isLastImage ? styles["angle-locked"] : ""
        }`}
        onClick={moveNext}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </div>

      <div
        className={styles["carousel-images"]}
        style={{
          transform: `translateX(-${currentImageIndex * 100}%)`,
        }}
      >
        {data?.map((item, index) => (
          <div
            key={index}
            className={styles["carousel-image"]}
            onClick={() => {
              router.push(`/post/${item.title}`);
            }}
          >
            <Image src={item.imageLink} alt={`Image ${index + 1}`} fill />
          </div>
        ))}
      </div>
    </div>
  );
}
