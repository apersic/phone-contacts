import styled from "styled-components";
import { colors } from "../../styles/base/colors";
import { responsive } from "../../styles/utils/responsive";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: 650px;
    background-color: ${colors.white};
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 4px;
    padding: 16px 24px;
    margin-bottom: 24px;

    ${responsive.phone} {
        padding: 16px;
    }
`;

export const CardText = styled.p`
    font-family: sans-serif;
    font-weight: normal;
    font-size: 1rem;
    line-height: 1rem;
    margin-bottom: 16px;
`;