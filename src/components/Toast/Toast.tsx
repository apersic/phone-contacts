/* eslint-disable @typescript-eslint/no-unused-vars */
import * as S from "./Toast.styles";

export interface ToastProps {
  message: string;
  severity?: "info" | "error";
}

const Toast = ({ message, severity }: ToastProps) => {
  return <S.Toast>{message}</S.Toast>;
};

export default Toast;
