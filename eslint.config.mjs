import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  {
    rules: {
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "variable",
          format: ["camelCase", "UPPER_CASE"], // 변수는 camelCase 또는 UPPER_CASE
          leadingUnderscore: "forbid", // _로 시작 금지 유무
          filter: {
            regex: "^(__filename|__dirname)$", // 예외 허용
            match: false,
          },
        },
        {
          selector: "function",
          format: ["camelCase"], // 함수는 camelCase
          filter: {
            // 함수형 컴포넌트는 예외
            regex: "^[A-Z]",
            match: false,
          },
        },
        {
          selector: "typeLike",
          format: ["PascalCase"], // 타입, 인터페이스는 PascalCase
        },
      ],
    },
  },
];

export default eslintConfig;
