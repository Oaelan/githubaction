import Image from "next/image";

//api에서 받아오는 데이터의 타입
export interface Post {
  createdAt: number;
  updatedAt: number;
  id: number;
  userId: number;
  content: string;
  user: {
    createdAt: number;
    updatedAt: number;
    id: number;
    username: string;
    name: string;
    photo: string;
  };
}

// 컴포넌트의 프롭스 타입
export interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div>
      <h1>{post.user.username}</h1>
      <p>{post.content}</p>
      <Image
        width={100}
        height={100}
        src={post.user.photo}
        alt={post.id.toString()}
      />
    </div>
  );
}
