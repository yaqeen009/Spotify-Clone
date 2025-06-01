/*
component for handling text & icon buttons 
*/

import type { ButtonProps } from "../types";

interface IconProp {
  icon: string;
}

type BtnProps = ButtonProps & IconProp;

export default function TextIconBtn({
  btnName,
  btnClick,
  colors,
  btnType,
  isScale,
  icon,
}: BtnProps) {
  return (
    <button
      onClick={btnClick}
      type={btnType}
      className={`${isScale && "hover:scale-105"} ${colors} flex items-center space-x-2`}
    >
      <img src={icon} className={`${colors}w-6 h-6`}/>
      <p>{btnName}</p>
    </button>
  );
}
