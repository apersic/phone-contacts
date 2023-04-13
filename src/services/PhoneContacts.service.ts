import { AxiosResponse } from "axios";
import ApiService from "./Api.service";

export default class PhoneContactsService {
  private apiService: ApiService;
  private baseApiRoute: string;
  private abortController: AbortController;

  constructor() {
    this.apiService = new ApiService("https://604868d1b801a40017ccdac6.mockapi.io/api/v1");
    this.baseApiRoute = "/subscriber";
    this.abortController = new AbortController();
  }

  getPhoneContacts(): Promise<AxiosResponse> {
    return this.apiService.get({
      resource: this.baseApiRoute,
      params: {
        signal: this.abortController.signal,
      },
    });
  }
}
