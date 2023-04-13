import * as Styled from "./Input.styles";

interface InputPropTypes {
  children?: JSX.Element[];
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  onBlur?: () => void;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  className?: string;
  multiline?: boolean;
  select?: boolean;
  rows?: number;
}

export const Input = (commonProps: InputPropTypes) => {
  return <Styled.Input {...commonProps}>{commonProps.children}</Styled.Input>;
};
