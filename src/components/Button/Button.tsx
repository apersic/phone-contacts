import { CSSProperties } from "react";
import * as S from "./Button.styles";

type ButtonType = "submit" | "reset" | "button";

interface ButtonProps {
  onClick?: () => void;
  label: string;
  style?: CSSProperties;
  className?: string;
  disabled?: boolean;
  type?: ButtonType;
  ariaLabel?: string;
}

export const Button = ({
  onClick,
  label,
  style,
  className,
  disabled,
  type = "button",
  ariaLabel,
}: ButtonProps) => {
  return (
    <S.Button
      disabled={disabled}
      className={className}
      onClick={onClick}
      type={type}
      style={style}
      aria-label={ariaLabel}
    >
      {label}
    </S.Button>
  );
};
