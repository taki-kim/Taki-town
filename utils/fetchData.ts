import {
  CommentProps,
  PostCountProps,
  PostDataProps,
  ProjectDataProps,
} from "@/type";
import { STALE_TIME } from "@/constant";

// posts

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

export async function fetchPostCount(
  postCategory: string
): Promise<PostCountProps> {
  const response = await fetch(
    `${process.env.PUBLIC_URL}/api/post-counter/get/${postCategory}`,
    { next: { revalidate: STALE_TIME } }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export async function createPost(formData: PostDataProps) {
  // update Counter
  await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/post-counter/patch/increase`,
    {
      method: "PATCH",
      body: JSON.stringify(formData.category),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const recentCount: PostCountProps = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/post-counter/get/${formData.category}`,
    { next: { revalidate: STALE_TIME } }
  ).then((res) => res.json());

  formData.postNumber = recentCount.count;

  alert(process.env.PUBLIC_URL);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/post/create-post`,
    {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
}

// comments

export async function submitNewComment(commentFormData: any) {
  await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/comment/create/create-comment`,
    {
      method: "POST",
      body: JSON.stringify(commentFormData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

export async function editComment(commentFormData: any) {
  await fetch(`${process.env.NEXT_PUBLIC_URL}/api/comment/edit/edit-comment`, {
    method: "PATCH",
    body: JSON.stringify(commentFormData),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
