import { useState } from "react";
import useToast from "../../../common/utils/hooks/useToast";
import { mapDataToPhoneContact } from "../../../common/utils/mappers/PhoneContactDataMapper";
import PhoneContactsService from "../../../services/PhoneContacts.service";
import Account from "../models/Account";
import PhoneContact from "../models/PhoneContact";
import ReactDOM from "react-dom";

export default function usePhoneContactsApiConsumer() {
  const toast = useToast();
  const phoneContactService = new PhoneContactsService();
  const [contacts, setContacts] = useState(Array<PhoneContact>);
  const [filteredContacts, setFilteredContacts] = useState(Array<PhoneContact>);

  const getPhoneContacts = async () => {
    try {
      const response = await phoneContactService.getPhoneContacts();

      const mappedData = response.data.map(
        (item: {
          id: string;
          name: string;
          country: string;
          city: string;
          avatar: string;
          address: string;
          accounts: Account[];
          calls: Account[];
        }) => mapDataToPhoneContact(item)
      );

      setContacts(mappedData);
      setFilteredContacts(mappedData);
    } catch (e) {
      toast.show({
        message: "There was an error while fetching your contacts.",
        severity: "error",
        wait: 3000,
      });
    }
  };

  const filterData = (query: string) => {
    const newData: PhoneContact[] = [];
    contacts.forEach((contact: PhoneContact) => {
      if (
        contact.getName().includes(query) ||
        contact.getCountry().includes(query) ||
        contact.getAddress().includes(query) ||
        contact.getCity().includes(query)
      ) {
        newData.push(contact);
      }
    });

    setFilteredContacts(newData);
  };

  const addContact = (contact: PhoneContact) => {
    const newData = [...contacts];
    newData.push(contact);

    setContacts(newData);
    filterData("");

    ReactDOM.unmountComponentAtNode(document.getElementById("popup") as Element);
    toast.show({
      message: "Contact created.",
      severity: "info",
      wait: 3000,
    });
  };

  return {
    data: {
      contacts,
      filteredContacts,
    },
    getPhoneContacts,
    filterData,
    addContact,
  };
}
