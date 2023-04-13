import styled, { css, keyframes } from "styled-components";

const LoadingAnimation = keyframes`
  0% { opacity: 0 }
  50% { opacity: 1 }
  100% { opacity: 0 }
`;

export const LoadingDots = styled.div<{ $isFixed?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  ${(props) =>
    props.$isFixed &&
    css`
      position: absolute;
      bottom: 76px;
    `}
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  position: relative;
`;

export const OuterDot = styled.div<{ $color: string; $delay?: number }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: transparent;
  border: 1px solid;
  border-color: ${(props) => (props.$color ? props.$color : "#2F78CA")};
  position: absolute;
  left: 0;
  top: 0;
  animation: ${LoadingAnimation} 1.6s linear infinite;
  opacity: 0;

  ${(props) => {
    if (props.$delay) {
      return css`
        animation-delay: ${props.$delay}s;
      `;
    }

    return css`
      animation-delay: 0s;
    `;
  }};
`;

export const InnerDot = styled.div<{ $color?: string }>`
  width: 4px;
  height: 4px;
  background: ${(props) => (props.$color ? props.$color : "#2F78CA")};
  border-radius: 50%;
  position: absolute;
  top: 25%;
  left: 25%;
`;
