import { ReactNode } from "react";
import * as S from "./Popup.styles";

interface PopupProps {
  content: ReactNode;
}

export const Popup = ({ content }: PopupProps) => {
  return <S.PopupWrapper>{content}</S.PopupWrapper>;
};
