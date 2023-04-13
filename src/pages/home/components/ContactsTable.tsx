import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { InputField } from "../../../components/InputField/InputField";
import * as S from "./ContactsTable.styles";
import { Button } from "../../../components/Button/Button";
import usePopup from "../../../common/utils/hooks/usePopup";
import { NewContactForm } from "./NewContactForm";
import PhoneContact from "../models/PhoneContact";
import { FieldValues } from "react-hook-form";

interface ContactsTableProps {
  data: PhoneContact[];
  onSearch: (query: string) => void;
  onAddContact: (data: FieldValues) => void;
}

export default function ContactsTable({ data, onSearch, onAddContact }: ContactsTableProps) {
  const popup = usePopup();
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "country", headerName: "Country", width: 130 },
    { field: "city", headerName: "City", width: 130 },
    { field: "address", headerName: "Address", width: 130 },
  ];

  const handleOnSearch = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  const handleOnAddContactClick = () => {
    popup.show({
      content: <NewContactForm onSubmit={(data: FieldValues) => onAddContact(data)} />,
    });
  };

  return (
    <S.ContactsTableWrapper>
      <S.TableHeaderWrapper>
        <InputField
          inputId="search"
          onChange={handleOnSearch}
          placeholder="Search"
          aria-label="search input"
        />

        <Button
          label="Add contact"
          ariaLabel="add contact button"
          onClick={handleOnAddContactClick}
        />
      </S.TableHeaderWrapper>

      <DataGrid aria-label="contacts table" rows={data} columns={columns} checkboxSelection />
    </S.ContactsTableWrapper>
  );
}
