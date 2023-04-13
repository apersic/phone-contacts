import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { InputField } from '../../../components/InputField/InputField';
import * as S from "./ContactsTable.styles";
import { Button } from '../../../components/Button/Button';

interface ContactsTableProps {
    data: any[];
    onSearch: (query: string) => void;
}

export default function ContactsTable({ data, onSearch }: ContactsTableProps) {
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'country', headerName: 'Country', width: 130 },
        { field: 'city', headerName: 'City', width: 130 },
        { field: 'address', headerName: 'Address', width: 130 },
    ];

    const handleOnSearch = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        onSearch(e.target.value);
    }

    return (
        <S.ContactsTableWrapper>
            <S.TableHeaderWrapper>
                <InputField
                    inputId='search'
                    onChange={handleOnSearch}
                    placeholder='Search'
                    aria-label="search input"
                />

                <Button label='Add contact' ariaLabel="add contact button"/>
            </S.TableHeaderWrapper>

            <DataGrid
                aria-label="contacts table"
                rows={data}
                columns={columns}
                checkboxSelection
            />
        </S.ContactsTableWrapper>
    );
}