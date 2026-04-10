export enum CurrencyEnum {
  ZLOTY = "zł",
  DOLLARS = "$",
  HRYWNA = "₴",
  EURO = "€",
  YEN = "¥",
}

export type Currency =
  | typeof CurrencyEnum.ZLOTY
  | typeof CurrencyEnum.DOLLARS
  | typeof CurrencyEnum.HRYWNA
  | typeof CurrencyEnum.EURO
  | typeof CurrencyEnum.YEN;

export type Account = {
  money: number;
  currency: Currency;
  transactions: Transaction[];
};

export type Transaction = {
  id: string;
  moneyBefore: number;
  moneyAfter: number;
  currentCurrency: Currency;
  transactionValue: number;
  transactionCurrency: Currency;
  date: number;
  convertedValue: number;
};
