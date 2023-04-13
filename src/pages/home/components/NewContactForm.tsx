import ReactDOM from "react-dom";
import { FieldValues, useForm } from "react-hook-form";
import * as S from "./NewContactForm.styles";
import { Button } from "../../../components/Button/Button";
import useCountriesApiConsumer from "../consumers/useCountriesApiConsumer";
import { ChangeEvent, useEffect, useState } from "react";
import { LoadingComponent } from "../../../components/LoadingComponent/LoadingComponent.styles";

interface NewContactFormProps {
  onSubmit: (data: FieldValues) => void;
}

export const NewContactForm = ({ onSubmit }: NewContactFormProps) => {
  const { register, handleSubmit } = useForm();
  const { data, getCountries } = useCountriesApiConsumer();
  const [selectedCountry, setSelectedCountry] = useState(data.countries ? data.countries[0] : "");

  useEffect(() => {
    getCountries();
  }, []);

  const handleOnClose = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("popup") as Element);
  };

  const handleOnSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
  };

  const handleOnSubmit = (data: FieldValues) => {
    const payload = {
      ...data,
      conutry: selectedCountry,
    };

    onSubmit(payload);
  };

  if (data.countries) {
    return (
      <S.NewContactForm onSubmit={handleSubmit(handleOnSubmit)}>
        <S.Input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
        <S.Input {...register("city")} placeholder="City" />
        <S.Select name="country" onChange={(e) => handleOnSelect(e)}>
          {data.countries.map((country, index) => (
            <option key={index} value={country.getName()}>
              {country.getName()}
            </option>
          ))}
        </S.Select>
        <S.Input {...register("avatar")} placeholder="Avatar" />
        <S.Input {...register("address")} placeholder="Address" />
        <S.Input {...register("accounts")} placeholder="Accounts" />
        <Button label="Submit" type="submit" />
        <Button label="Cancel" onClick={() => handleOnClose()} className="secondary" />
      </S.NewContactForm>
    );
  }

  return <LoadingComponent />;
};
