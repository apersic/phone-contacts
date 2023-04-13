import styled from "styled-components";
import { colors } from "../../../styles/base/colors";

export const ContactsTableWrapper = styled.div`
    width: 100%;
    height: 480px;

    .MuiDataGrid-root {
        background-color: ${colors.white};
    }
`;

export const TableHeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    margin-bottom: 24px
`;