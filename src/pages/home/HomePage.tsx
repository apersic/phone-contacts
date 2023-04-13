import { useEffect } from "react";
import ContactsTable from "./components/ContactsTable"
import { LoadingComponent } from "../../components/LoadingComponent/LoadingComponent.styles";
import usePhoneContactsApiConsumer from "./consumers/usePhoneContactsApiConsumer";
import * as S from "./HomePage.styles";

const HomePage = () => {
    const { data, getPhoneContacts, filterData } = usePhoneContactsApiConsumer();

    useEffect(() => {
        getPhoneContacts();
    }, []);

    if (data.filteredContacts) {
        return (
            <S.MainLayout>
                <ContactsTable
                    data={data.filteredContacts}
                    onSearch={(query: string) => filterData(query)}
                />
            </S.MainLayout>
        );
    }

    return <LoadingComponent />;
}

export default HomePage;