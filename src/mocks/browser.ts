import { setupWorker } from "msw/browser";
import { loginHandlers } from "./handlers/loginHandler";

export const worker = setupWorker(...loginHandlers);
// 개발 환경에서만 실행
if (process.env.NODE_ENV === "development") {
  worker.start({
    onUnhandledRequest: "bypass", // 처리되지 않은 요청은 무시
  });
}
