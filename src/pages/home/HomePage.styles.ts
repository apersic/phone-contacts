import styled from "styled-components";
import { responsive } from "../../styles/utils/responsive";
import { colors } from "../../styles/base/colors";

export const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 64px 120px;
  background-color: ${colors.grey2};

  ${responsive.tablet_landscape} {
    padding: 64px;
  }

  ${responsive.phone} {
    padding: 24px 16px;
  }
`;
