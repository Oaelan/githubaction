"use client";
import { getPosts } from "@/api/api";
import { useAuthStore } from "@/store/authStore";
import { useQuery } from "@tanstack/react-query";

export default function LoginCard() {
  const result = useQuery({ queryKey: ["posts"], queryFn: getPosts });
  console.log(result);
  return <div className="flex flex-col justify-center items-center"></div>;
}
