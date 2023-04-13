/* eslint-disable @typescript-eslint/no-explicit-any */
import Account from "../../../pages/home/models/Account";
import PhoneContact from "../../../pages/home/models/PhoneContact";

export const mapDataToPhoneContact = (item: {
  id: string;
  name: string;
  country: string;
  city: string;
  avatar: string;
  address: string;
  accounts: Account[];
  calls: Account[];
}) => {
  return new PhoneContact(
    item.id,
    item.name,
    item.country,
    item.city,
    item.avatar,
    item.address,
    item.accounts.map((item: any) => mapDataToAccount(item)),
    item.calls.map((item: any) => mapDataToAccount(item))
  );
};

export const mapDataToAccount = (item: {
  balance: number;
  created: string;
  id: string;
  name: string;
  subscriberId: string;
}) => {
  return new Account(item.balance, item.created, item.id, item.name, item.subscriberId);
};
