import Country from "../../../pages/home/models/Country";

export function mapDataToCountry(data: { name: string; alpha2Code: string; flag: string }) {
  return new Country(data.name, data.alpha2Code, data.flag);
}
