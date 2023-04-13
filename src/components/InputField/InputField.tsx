/* eslint-disable @typescript-eslint/no-unused-vars */
import { Input } from "../Input/Input";
import * as Styled from "./InputField.styles";

interface NumberInputProps {
  min?: number;
  max?: number;
  step?: string;
}

interface InputFieldProps {
  children?: JSX.Element[];
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  helperText?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  value?: string | number | readonly string[] | undefined;
  type?: string;
  onBlur?: () => void;
  name?: string;
  formHelperTextProps?: unknown;
  multiline?: boolean;
  select?: boolean;
  date?: boolean;
  rows?: number;
  className?: string;
  inputProps?: NumberInputProps;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  checked?: boolean;
  inputId: string;
}

export const InputField = ({
  children,
  placeholder,
  disabled,
  label,
  helperText,
  error,
  onChange,
  value,
  type,
  onBlur,
  name,
  multiline,
  select,
  rows,
  className,
  onClick,
  checked,
  inputId,
}: InputFieldProps) => {
  const isError = error !== "";
  const finalHelperText = isError ? error : helperText;

  const commonProps = {
    name,
    onChange,
    onBlur,
    onClick,
    type,
    placeholder,
    disabled,
    label: label || "",
    className,
    multiline,
    select,
    rows,
    checked,
    id: inputId,
  };

  return (
    <Styled.InputField className={className} $error={isError}>
      {isError && <span className="error">{finalHelperText}</span>}

      <Input {...commonProps} />

      {label && <span>{label}</span>}
    </Styled.InputField>
  );
};
