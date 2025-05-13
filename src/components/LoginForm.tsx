"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";
import { FormEvent } from "react";
import { useAuthStore } from "@/store/authStore";
import { useMutation } from "@tanstack/react-query";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, logout, isAuthenticated, isPending } = useAuthStore();

  const mutation = useMutation({
    mutationFn: () => login(email, password),
    onSuccess: () => {
      router.push("/");
    },
  });
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    mutation.mutate();
  };

  if (isPending) return <div>로딩중...</div>;

  return (
    <div className="p-5 flex flex-col gap-5">
      {isAuthenticated ? (
        <Button onClick={logout} variant="destructive">
          로그아웃
        </Button>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5">
            <div className="flex justify-between">
              <label className="mr-2">이메일</label>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                inputType="email"
                rounded
                disabled={mutation.isPending}
              />
            </div>
            <div className="flex justify-between">
              <label className="mr-2">비밀번호</label>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                inputType="password"
                rounded
                variant="success"
                disabled={mutation.isPending}
              />
            </div>
            <Button
              type="submit"
              variant="default"
              isLoading={mutation.isPending}
            >
              로그인
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
