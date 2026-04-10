import { Account, CurrencyEnum, Transaction } from "@/src/types";

export const accountHistoryInitialState: Transaction[] = [];

export const accountInitialState: Account = {
  money: 0,
  currency: CurrencyEnum.ZLOTY,
  transactions: accountHistoryInitialState,
};
