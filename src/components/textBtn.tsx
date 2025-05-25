import type { ButtonProps } from "../types";

export default function TextBtn({ colors, btnName, btnClick, btnType, isScale }: ButtonProps) {
  return (
    <button
      className={`${colors} rounded-full hover:opacity-80 ${isScale && `hover:scale-105`} transition-all px-4  font-open_sans`}
      onClick={btnClick}
      type={btnType}
    >
      {btnName}
    </button>
  );
}
