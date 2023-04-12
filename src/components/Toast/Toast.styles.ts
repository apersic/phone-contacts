import styled from "styled-components";
import { colors } from "../../styles/base/colors";

export const Toast = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: fixed;
    right: 16px;
    bottom: 16px;
    background-color: ${colors.white};
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 4px;
    padding: 24px;
    z-index: 10;
    font-family: sans-serif;
`;