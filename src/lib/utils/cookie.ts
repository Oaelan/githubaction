import Cookies from "js-cookie";

interface CookieOptions {
  expires?: number | Date; // 만료일 (일) 또는 Date 객체
  path?: string; // 쿠키 경로
  domain?: string; // 도메인
  secure?: boolean; // HTTPS에서만 전송
  sameSite?: "strict" | "lax" | "none"; // SameSite 정책
}

//특정한 키값의 쿠키 가져오기
export const getCookiebyKey = (key: string) => {
  return Cookies.get(key);
};

//쿠키 설정하기
export const setCookie = (
  key: string,
  value: string,
  options: CookieOptions = {}
) => {
  Cookies.set(key, value, {
    expires: options.expires ?? 7,
    path: options.path ?? "/",
    secure: options.secure ?? true,
    sameSite: options.sameSite ?? "strict",
    domain: options.domain,
  });
};
//쿠키 삭제
export const removeCookie = (key: string) => {
  Cookies.remove(key);
};
