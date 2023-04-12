import styled from "styled-components";

export const LoadingComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const LoadingText = styled.span<{$color?: string}>`
  display: inline-block;
  margin-top: 18px;
  font-family: sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: ${(props) => (props.$color ? props.$color : "#2F78CA")};
`;