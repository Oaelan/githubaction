import { cva, VariantProps } from "class-variance-authority";
import { ChangeEvent } from "react";

export type InputProps = VariantProps<typeof inputVariants> & {
  className?: string;
  inputType: InputType;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};
export type InputType =
  | "text"
  | "password"
  | "email"
  | "number"
  | "tel"
  | "url"
  | "search"
  | "date"
  | "datetime-local"
  | "time"
  | "month"
  | "week"
  | "color"
  | "file"
  | "hidden"
  | "checkbox"
  | "radio"
  | "submit"
  | "button"
  | "reset";
const BASE_STYLE = "text-medium px-4 outline-none";
export const inputVariants = cva(BASE_STYLE, {
  variants: {
    variant: {
      primary:
        "bg-gray-100 text-gray-800 focus:border-red-500 focus:ring-2 focus:ring-red-200",
      success:
        "bg-green-100 text-green-800 focus:border-green-500 focus:ring-2 focus:ring-green-200",
      warning:
        "bg-yellow-100 text-yellow-800 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200",
    },
    rounded: {
      true: "rounded-full",
    },
    outlined: {
      true: "bg-transparent border",
    },
  },
  compoundVariants: [
    {
      outlined: true,
      variant: "success",
      className: "border-green-500 text-green-500",
    },
    {
      outlined: true,
      variant: "warning",
      className: "border-red-500 text-red-500",
    },
  ],
  defaultVariants: {
    variant: "primary",
    rounded: false,
    outlined: false,
  },
});
