import { PostDataProps, ProjectDataProps } from "@/type";
import { STALE_TIME } from "@/constant";

export async function fetchPostList(): Promise<PostDataProps[]> {
  const response = await fetch(
    `${process.env.PUBLIC_URL}/api/post/get-all-posts`,
    { next: { revalidate: STALE_TIME } }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export async function fetchProjectList(): Promise<ProjectDataProps[]> {
  const response = await fetch(
    `${process.env.PUBLIC_URL}/api/project/get/get-all-projects`,
    { next: { revalidate: STALE_TIME } }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export async function fetchPostData(postTitle: string) {
  const response = await fetch(
    `${process.env.PUBLIC_URL}/api/post/${postTitle}`,
    { next: { revalidate: STALE_TIME } }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export async function fetchProjectData(projectTitle: string) {
  const response = await fetch(
    `${process.env.PUBLIC_URL}/api/project/get/${projectTitle}`,
    { next: { revalidate: STALE_TIME } }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export async function fetchPostCount(postCategory: string) {
  const response = await fetch(
    `${process.env.PUBLIC_URL}/api/post/get/${postCategory}`,
    { next: { revalidate: STALE_TIME } }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}
