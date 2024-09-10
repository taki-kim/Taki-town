"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import styles from "./carousel.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";

export default function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFirstImage, setIsfirstImage] = useState(true);
  const [isLastImage, setIsLastImage] = useState(false);
  const [postTitle, setPostTitle] = useState("");

  const images: any = [
    {
      image:
        "https://thumbnail.laftel.net/items/home/4ea9e512-f9f3-4b35-a4b2-107a3c47fcd0.jpg?w=760&webp=0&c=0%2C60%2C640%2C420",
      title: "놀라는 긴상",
    },
    {
      image: "https://cdn.slist.kr/news/photo/201706/15028_46783_4353.jpg",
      title: "해결사 긴토키 사무소",
    },
    {
      image:
        "https://thumbnail.laftel.net/items/home/85001e6f-237e-4de0-b12f-f1b09143dd9c.jpg?w=760&webp=0&c=38%2C0%2C1024%2C554",
      title: "수리검 긴상",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW3G6fHtGf2W00DaH4YIbRKQfp87pb5ptZiQ&s",
      title: "절망하는 긴상",
    },
  ];

  function movePrev() {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((prevIndex) => prevIndex - 1);
    } else if (currentImageIndex == 0) {
      return null;
    }
  }

  function moveNext() {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    } else {
      null;
    }
  }

  useEffect(() => {
    if (currentImageIndex == images.length - 1) {
      setIsfirstImage(false);
      setIsLastImage(true);
    } else if (currentImageIndex == 0) {
      setIsfirstImage(true);
      setIsLastImage(false);
    } else {
      setIsfirstImage(false);
      setIsLastImage(false);
    }

    setPostTitle(images[currentImageIndex].title);
  }, [currentImageIndex]);

  return (
    <div className={styles["carousel-container"]}>
      <div className={`${styles["post-title"]}`}>{postTitle}</div>
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
        {images.map((images: any, index: number) => (
          <div key={index} className={styles["carousel-image"]}>
            <Image src={images.image} alt={`Image ${index + 1}`} fill />
          </div>
        ))}
      </div>
    </div>
  );
}
