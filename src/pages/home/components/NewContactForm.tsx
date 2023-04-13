import ReactDOM from "react-dom";
import { FieldValues, useForm } from "react-hook-form";
import * as S from "./NewContactForm.styles";
import { Button } from "../../../components/Button/Button";
import useCountriesApiConsumer from "../consumers/useCountriesApiConsumer";
import { ChangeEvent, useEffect } from "react";
import { LoadingComponent } from "../../../components/LoadingComponent/LoadingComponent.styles";

interface NewContactFormProps {
  onSubmit: (data: FieldValues) => void;
}

export const NewContactForm = ({ onSubmit }: NewContactFormProps) => {
  const { register, handleSubmit } = useForm();
  const { data, getCountries, setSelectedCountry } = useCountriesApiConsumer();

  useEffect(() => {
    getCountries();
  }, []);

  const handleOnClose = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("popup") as Element);
  };

  const handleOnSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
  };

  const handleOnSubmit = (contact: FieldValues) => {
    const payload = {
      ...contact,
      country: data.selectedCountry,
    };

    onSubmit(payload);
  };

  if (data.countries) {
    return (
      <S.NewContactForm onSubmit={handleSubmit(handleOnSubmit)}>
        <S.FormTitle aria-label="Create new contact">Create new contact</S.FormTitle>
        <S.Input
          aria-label="name"
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Name"
        />
        <S.Input aria-label="city" {...register("city")} placeholder="City" />
        <S.Select aria-label="country" name="country" onChange={(e) => handleOnSelect(e)}>
          {data.countries.map((country, index) => (
            <option key={index} value={country.getName()}>
              {country.getName()}
            </option>
          ))}
        </S.Select>
        <S.Input aria-label="avatar" {...register("avatar")} placeholder="Avatar" />
        <S.Input aria-label="address" {...register("address")} placeholder="Address" />
        <S.Input aria-label="accounts" {...register("accounts")} placeholder="Accounts" />
        <S.ButtonGroup>
          <Button ariaLabel="submit" label="Submit" type="submit" />
          <Button
            ariaLabel="cancel"
            label="Cancel"
            onClick={() => handleOnClose()}
            className="secondary"
          />
        </S.ButtonGroup>
      </S.NewContactForm>
    );
  }

  return <LoadingComponent />;
};
