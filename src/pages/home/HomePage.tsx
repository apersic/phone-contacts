import { useEffect } from "react";
import ContactsTable from "./components/ContactsTable";
import { LoadingComponent } from "../../components/LoadingComponent/LoadingComponent.styles";
import usePhoneContactsApiConsumer from "./consumers/usePhoneContactsApiConsumer";
import * as S from "./HomePage.styles";
import { FieldValues } from "react-hook-form";
import PhoneContact from "./models/PhoneContact";

const HomePage = () => {
  const { data, getPhoneContacts, filterData, addContact } = usePhoneContactsApiConsumer();

  useEffect(() => {
    getPhoneContacts();
  }, []);

  const handleOnAddContact = (data: FieldValues) => {
    console.log(data);
    addContact(
      new PhoneContact(
        data.id || Math.floor(Math.random() * 3000),
        data.name,
        data.country,
        data.city,
        data.avatar,
        data.address,
        [],
        []
      )
    );
  };

  if (data.filteredContacts) {
    return (
      <S.MainLayout>
        <S.PageTitle aria-label="Contacts">Contacts</S.PageTitle>
        <ContactsTable
          data={data.filteredContacts}
          onSearch={(query: string) => filterData(query)}
          onAddContact={(data) => handleOnAddContact(data)}
        />
      </S.MainLayout>
    );
  }

  return <LoadingComponent />;
};

export default HomePage;
