import styled from "styled-components";
import { colors } from "../../styles/base/colors";

export const PopupWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.popupBackground};
  padding: 0 220px;
  z-index: 5;
`;
