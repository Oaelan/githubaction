import LoginForm from "@/components/LoginForm";
import Link from "next/link";
export default function Login() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <Link href="/auth/signup">회원가입 페이지로 이동</Link>
        <h1>로그인 폼 입니다.</h1>
        <LoginForm></LoginForm>
      </div>
    </div>
  );
}
