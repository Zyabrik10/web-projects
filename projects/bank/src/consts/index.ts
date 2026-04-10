import { Currency, CurrencyEnum } from "../types";

export const currencies: Set<Currency> = new Set([
  CurrencyEnum.ZLOTY,
  CurrencyEnum.DOLLARS,
  CurrencyEnum.HRYWNA,
  CurrencyEnum.EURO,
  CurrencyEnum.YEN,
]);

export const currenciesObj = {
  [CurrencyEnum.ZLOTY]: {
    [CurrencyEnum.ZLOTY]: 1,
    [CurrencyEnum.DOLLARS]: 0.27,
    [CurrencyEnum.EURO]: 0.24,
    [CurrencyEnum.HRYWNA]: 11.91,
    [CurrencyEnum.YEN]: 43.911,
  },
  [CurrencyEnum.DOLLARS]: {
    [CurrencyEnum.ZLOTY]: 3.64,
    [CurrencyEnum.DOLLARS]: 1,
    [CurrencyEnum.EURO]: 0.86,
    [CurrencyEnum.HRYWNA]: 43.4,
    [CurrencyEnum.YEN]: 157.77,
  },
  [CurrencyEnum.EURO]: {
    [CurrencyEnum.ZLOTY]: 0.24,
    [CurrencyEnum.DOLLARS]: 0.27,
    [CurrencyEnum.EURO]: 1,
    [CurrencyEnum.HRYWNA]: 11.91,
    [CurrencyEnum.YEN]: 182.82,
  },
  [CurrencyEnum.HRYWNA]: {
    [CurrencyEnum.ZLOTY]: 0.08,
    [CurrencyEnum.DOLLARS]: 0.02,
    [CurrencyEnum.EURO]: 0.02,
    [CurrencyEnum.HRYWNA]: 1,
    [CurrencyEnum.YEN]: 3.64,
  },
  [CurrencyEnum.YEN]: {
    [CurrencyEnum.ZLOTY]: 0.02277,
    [CurrencyEnum.EURO]: 0.0055,
    [CurrencyEnum.DOLLARS]: 0.0063,
    [CurrencyEnum.HRYWNA]: 0.28,
    [CurrencyEnum.YEN]: 1,
  },
};
