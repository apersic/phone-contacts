import styled from "styled-components";
import { colors } from "../../styles/base/colors";
import { responsive } from "../../styles/utils/responsive";

export const Button = styled.button`
    border-radius: 4px;
    border: 0;
    color: ${colors.white};
    background-color: ${colors.sucess};
    padding: 16px 24px;
    fontFamily: "sans-serif",
    font-weight: 'bold',
    font-size: '1.4rem',
    line-height: '1.4rem',
    text-transform: 'none',
    width: 100%;
    min-width: 220px;
    cursor: pointer;

    &:disabled {
        background-color: ${colors.grey2};
        border: 1px solid ${colors.white};
    }

    ${responsive.phone} {
        min-width: 100%;
    }
`;