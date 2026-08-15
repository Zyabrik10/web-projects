import { Currency } from "@/src/types";
import axios from "axios";

const apiKey = "c53e714903fec78646228f36";

const api = axios.create({
  baseURL: `https://v6.exchangerate-api.com/v6/${apiKey}`,
});

type PropsConvertCurrency = {
  currentCurrency: Currency;
  value: number;
  convertCurrency: Currency;
};

export function convertCurrency({
  currentCurrency,
  value,
  convertCurrency,
}: PropsConvertCurrency) {
  return 0;
}
