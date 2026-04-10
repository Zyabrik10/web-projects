import { Currency } from "@/src/types";
import { nanoid } from "nanoid";
import {
  convertCurrencies,
  validate,
  validateCurrency,
  validateMoney,
} from "..";

export class Transaction {
  public id: string;
  public moneyBefore: number;
  public moneyAfter: number;
  public transactionValue: number;
  public date: Date;
  public transactionCurrency: Currency;
  public currentCurrency: Currency;

  constructor(
    money: number,
    currentCurrency: Currency,
    transactionValue: number,
    transactionCurrency: Currency,
  ) {
    this.validate(
      money,
      currentCurrency,
      transactionValue,
      transactionCurrency,
    );

    this.id = nanoid();
    this.date = new Date();
    this.moneyBefore = money;
    try {
      const convertedMoney = convertCurrencies(
        transactionValue,
        transactionCurrency,
        currentCurrency,
      );

      this.moneyAfter = money + convertedMoney;
      this.currentCurrency = currentCurrency;
      this.transactionCurrency = transactionCurrency;
      this.transactionValue = transactionValue;
    } catch (e) {
      console.error((e as Error).message);
      this.moneyAfter = money;
      this.currentCurrency = currentCurrency;
      this.transactionCurrency = transactionCurrency;
      this.transactionValue = 0;
    }
  }

  validate(
    money: number,
    currentCurrency: Currency,
    transactionValue: number,
    transactionCurrency: Currency,
  ) {
    try {
      validate(money, currentCurrency);
      validateMoney(transactionValue);
      validateCurrency(transactionCurrency);
    } catch (e) {
      console.error(e);
    }
  }
}
