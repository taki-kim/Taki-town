import { PostDataProps, ProjectDataProps } from "@/type";

export async function fetchPostList(): Promise<PostDataProps[]> {
  const response = await fetch(
    `${process.env.PUBLIC_URL}/api/post/get-all-posts`,
    { next: { revalidate: 21600 } } // 6시간 마다 갱신
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export async function fetchProjectList(): Promise<ProjectDataProps[]> {
  const response = await fetch(
    `${process.env.PUBLIC_URL}/api/project/get/get-all-projects`,
    { next: { revalidate: 21600 } } // 6시간 마다 갱신
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export async function fetchPostData(postTitle: string) {
  const response = await fetch(
    `${process.env.PUBLIC_URL}/api/post/${postTitle}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export async function fetchProjectData(projectTitle: string) {
  const response = await fetch(
    `${process.env.PUBLIC_URL}/api/project/get/${projectTitle}`,
    { next: { revalidate: 21600 } } // 6시간 마다 갱신
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}
