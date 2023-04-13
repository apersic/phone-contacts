import { AxiosResponse } from "axios";
import ApiService from "./Api.service";

export default class CountriesService {
  private apiService: ApiService;
  private baseApiRoute: string;
  private abortController: AbortController;

  constructor() {
    this.apiService = new ApiService("https://restcountries.com/v2");
    this.baseApiRoute = "/all";
    this.abortController = new AbortController();
  }

  getCountries(): Promise<AxiosResponse> {
    return this.apiService.get({
      resource: this.baseApiRoute,
      params: {
        signal: this.abortController.signal,
      },
    });
  }
}
