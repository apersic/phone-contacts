import styled from "styled-components";
import { colors } from "../../styles/base/colors";

export const Input = styled.input`
  width: 100%;
  height: 32px;
  border: 0;
  background: transparent;

  &::placeholder {
    color: ${colors.black};
  }

  &:focus,
  &:active {
    outline: none;
  }
`;
