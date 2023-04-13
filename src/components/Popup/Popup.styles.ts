import styled from "styled-components";
import { colors } from "../../styles/base/colors";
import { responsive } from "../../styles/utils/responsive";

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

  ${responsive.tablet_landscape} {
    padding: 0 120px;
  }

  ${responsive.tablet_portrait} {
    padding: 0 64px;
  }

  ${responsive.phone} {
    padding: 0 16px;
  }
`;
