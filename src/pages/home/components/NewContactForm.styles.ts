import styled from "styled-components";
import { responsive } from "../../../styles/utils/responsive";

export const NewContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  width: 100%;
  background: white;
  border-radius: 4px;
`;

export const Input = styled.input`
  padding: 12px;
`;

export const Select = styled.select`
  padding: 12px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  width: 100%;

  button {
    width: 50%;
  }

  ${responsive.tablet_landscape} {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
`;

export const FormTitle = styled.h2`
  font-family: sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 24px 0;
  text-align: left;

  ${responsive.tablet_portrait} {
    font-size: 1rem;
    margin: 12px 0;
  }
`;
