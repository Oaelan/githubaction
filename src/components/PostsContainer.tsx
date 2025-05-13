"use client";
import { getPosts, getPostsByUsername } from "@/api/api";
import { useQuery } from "@tanstack/react-query";
import PostCard, { Post } from "./ui/PostCard";

export default function PostsContainer() {
  const {
    data: postsData,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    retry: 0,
  });

  if (isPending) return "로딩 중입니다...";

  if (isError) return "에러가 발생했습니다.";

  const posts = postsData?.results ?? [];
  return (
    <div>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>
            {post.user.name}: {post.content}
          </li>
        ))}
      </ul>
    </div>
  );
}
