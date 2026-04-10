import { Currency, Transaction } from "@/src/types";
import { convertCurrencies, validateCurrency } from ".";

export function createTransaction(
  moneyBefore: number,
  currentCurrency: Currency,
  transactionValue: number,
  transactionCurrency: Currency,
) {
  const convertedValue = convertCurrencies(
    transactionValue,
    transactionCurrency,
    currentCurrency,
  );
  return {
    id: crypto.randomUUID(),
    moneyBefore,
    moneyAfter: moneyBefore + convertedValue,
    transactionValue,
    date: Date.now(),
    transactionCurrency,
    currentCurrency,
    convertedValue,
  };
}

export function calculateTransactions(history: Transaction[] = []) {
  let money = 0;

  for (const trans of history) {
    money += convertCurrencies(
      trans.transactionValue,
      trans.transactionCurrency,
      trans.currentCurrency,
    );
  }

  return money;
}

export function getTransactionClassById(id: string, history: Transaction[]) {
  return history.find((trans) => trans.id === id);
}

export function updateTransactionById(
  {
    id,
    ...newValues
  }: {
    id: string;
  },
  transactions: Transaction[],
) {
  const newHistory = transactions.map((trans) => {
    if (trans.id === id) {
      return {
        ...trans,
        ...newValues,
      };
    }

    return trans;
  });

  return newHistory;
}

export function removeTransactionById(id: string, transactions: Transaction[]) {
  return transactions.filter((trans) => trans.id !== id);
}

export function changeCurrency(currency: Currency, history: Transaction[]) {
  try {
    validateCurrency(currency);

    const updatedHistory = history.map((trans: Transaction) => {
      const transactionCurrency =
        trans.currentCurrency === trans.transactionCurrency
          ? currency
          : trans.transactionCurrency;

      const newTrans = createTransaction(
        trans.moneyBefore,
        currency,
        trans.transactionValue,
        transactionCurrency,
      );

      return newTrans;
    });

    return updatedHistory;
  } catch (e) {
    console.log(e);
  }
}

export function getSerializableHistory(history: Transaction[]) {
  return history.map((trans) => ({
    id: trans.id,
    moneyBefore: trans.moneyBefore,
    moneyAfter: trans.moneyAfter,
    transactionValue: trans.transactionValue,
    date: trans.date,
    transactionCurrency: trans.transactionCurrency,
    currentCurrency: trans.currentCurrency,
  }));
}
