import { Country, Currency } from "shared/const/common";

export interface IProfile {
  firstname: string;
  lastname: string;
  age: number;
  currency: Currency;
  country: Country;
  username: string;
  avatar: string;
}

export interface ProfileSchema {
  data: IProfile | null;
  isLoading: boolean;
  error: string | null;
  readonly: boolean;
}
