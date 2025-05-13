import { http, HttpResponse } from "msw";
//로그인 요청 타입 지정
interface LoginRequest {
  email: string;
  password: string;
}
export const loginHandlers = [
  //로그인 요청
  http.post("https://example.com/api/auth/login", async ({ request }) => {
    const { email, password } = (await request.json()) as LoginRequest;
    if (email === "test@test.com" && password === "1234") {
      return HttpResponse.json({
        user: {
          id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
          email: "test@test.com",
        },
        token: "fake-jwt-token-12345", // 로그인 성공 시 발급되는 토큰
      });
    }
    // 로그인 실패 시
    return new HttpResponse(
      JSON.stringify({ message: "이메일 또는 비밀번호가 올바르지 않습니다." }),
      {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }),
];
