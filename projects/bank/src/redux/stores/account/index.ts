import { createSlice } from "@reduxjs/toolkit";
import { accountInitialState } from "./account-init";
import {
  calculateTransactions,
  createTransaction,
  removeTransactionById,
  updateTransactionById,
} from "@/src/utils";

export const accountSlice = createSlice({
  name: "account",
  initialState: accountInitialState,
  reducers: {
    initTransactions(state, action) {
      const transactions = action.payload.transactions;
      const money = calculateTransactions(transactions);

      state.money = money;
      state.transactions = transactions;
      state.currency = action.payload.currency;
    },
    addTransaction(state, action) {
      const newTransaction = createTransaction(
        state.money,
        state.currency,
        action.payload.transactionValue,
        action.payload.transactionCurrency,
      );
      state.money = newTransaction.moneyAfter;
      state.transactions.push(newTransaction);
    },
    removeTransaction(state, action) {
      const transactionId = action.payload.id;
      const newTransactions = removeTransactionById(
        transactionId,
        state.transactions,
      );
      state.transactions = newTransactions;
      state.money = calculateTransactions(newTransactions);
    },
    updateTransaction(state, action) {
      const updatedTransaction = action.payload;

      const newTransactions = updateTransactionById(
        updatedTransaction,
        state.transactions,
      );

      state.transactions = newTransactions;
      state.money = calculateTransactions(newTransactions);
    },
  },
});

export const { addTransaction } = accountSlice.actions;
export const accountReducer = accountSlice.reducer;
export * from "./account-init";
