"use client";

import ProfileImageBox from "../profile-image-box/profile-image-box";
import styles from "./profile-image-selector.module.scss";
import profileImageList from "@/lib/profile-image-list";

type ProfileImageSelectorProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  imagePath: string;
  setImagePath: React.Dispatch<React.SetStateAction<string>>;
};

export default function ProfileImageSelector({
  showModal,
  setShowModal,
  imagePath,
  setImagePath,
}: ProfileImageSelectorProps) {
  if (showModal)
    return (
      <div
        className={styles["wrapper"]}
        onClick={() => {
          setShowModal(false);
        }}
      >
        <div
          className={styles["selector-wrapper"]}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <ProfileImageBox imageLink={imagePath} size="big" />
          <p className={styles["p"]}>댓글 프로필이 위의 이미지로 설정됩니다</p>
          <div className={styles["image-list"]}>
            {profileImageList.map((e) => (
              <img
                key={e.imageName}
                src={e.imageLink}
                className={styles["circular-image-example"]}
                tabIndex={0}
                role="button"
                onClick={() => {
                  setImagePath(e.imageLink);
                }}
              ></img>
            ))}
          </div>
          <div className={styles["input-wrapper"]}>
            <span className={styles["input-label"]}>나의 이미지 사용하기</span>
            <input
              className={styles["link-input"]}
              placeholder="설정하고 싶은 작성자만의 이미지 링크를 붙여넣으세요"
              onChange={(e) => {
                setImagePath(e.target.value);
              }}
            />
          </div>
          <button
            className={styles["close-button"]}
            onClick={() => {
              setShowModal(false);
            }}
          >
            완료
          </button>
        </div>
      </div>
    );
  else return null;
}
