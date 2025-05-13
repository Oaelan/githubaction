import { InputProps } from "@/lib/styles/InputVariants";
import { inputVariants } from "@/lib/styles/InputVariants";
import cn from "@/lib/utils/cn";
export default function Input({
  inputType,
  variant,
  outlined = false,
  rounded = false,
  className = "",
  value,
  onChange,
}: InputProps) {
  return (
    <input
      value={value}
      onChange={onChange}
      className={cn(inputVariants({ variant, outlined, rounded, className }))}
      type={inputType}
    ></input>
  );
}
