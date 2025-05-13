import { buttonVariants } from "@/lib/styles/ButtonVariants";
import cn from "@/lib/utils/cn";
import { ButtonProps } from "@/lib/styles/ButtonVariants";
export default function Button({
  variant,
  size,
  isLoading = false,
  className = "",
  children,
  onSubmit,
  onClick,
}: ButtonProps) {
  return (
    <button
      onSubmit={onSubmit}
      onClick={onClick}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {isLoading ? "로딩중" : children}
    </button>
  );
}
