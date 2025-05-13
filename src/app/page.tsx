import { getPosts } from "@/api/api";
import LoginCard from "@/components/LoginCard";
import { useQuery } from "@tanstack/react-query";
import PostsContainer from "@/components/PostsContainer";
export default function Home() {
  return (
    <div
      className="flex justify-center items-center
      h-screen w-screen"
    >
      <div className="flex flex-col justify-center items-center">
        <h1>메인 페이지입니다.</h1>
        <PostsContainer />
      </div>
    </div>
  );
}
