import sytles from "./submit-button.module.scss";
import { editPost } from "@/utils/api";

export default function PostEditButton({ formData }: { formData: any }) {
  const handleClick = async () => {
    const success = await editPost(formData);
    if (success) alert("Post edited successfully");
  };

  return (
    <div className={sytles["button"]} onClick={handleClick}>
      SUBMIT
    </div>
  );
}
