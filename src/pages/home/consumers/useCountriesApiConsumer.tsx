import { useState } from "react";
import CountriesService from "../../../services/Countries.service";
import useToast from "../../../common/utils/hooks/useToast";
import { mapDataToCountry } from "../../../common/utils/mappers/CountryDataMapper";
import Country from "../models/Country";

export default function useCountriesApiConsumer() {
  const toast = useToast();
  const countriesService = new CountriesService();
  const [countries, setCountries] = useState(Array<Country>);
  const [selectedCountry, setSelectedCountry] = useState("");

  const getCountries = async () => {
    try {
      const response = await countriesService.getCountries();

      const mappedData = response.data.map(
        (item: { name: string; alpha2Code: string; flag: string }) => mapDataToCountry(item)
      );

      setCountries(mappedData);
      setSelectedCountry(mappedData[0].getName());
    } catch (e) {
      toast.show({
        message: "There was an error while fetching available countries.",
        severity: "error",
        wait: 3000,
      });
    }
  };

  return {
    data: {
      countries,
      selectedCountry,
    },
    getCountries,
    setSelectedCountry,
  };
}
