import sytles from "./submit-button.module.scss";
import { editProject } from "@/utils/api";

export default function ProjectEditButton({ formData }: { formData: any }) {
  const handleClick = async () => {
    const success = await editProject(formData);
    if (success) alert("Project edited successfully");
  };

  return (
    <div className={sytles["button"]} onClick={handleClick}>
      SUBMIT
    </div>
  );
}
