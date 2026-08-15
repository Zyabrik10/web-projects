"use client";

import { Button, Modal } from "@/src/components";
import { addTransaction } from "@/src/redux";
import { CurrencyEnum } from "@/src/types";
import { useState } from "react";
import { useDispatch } from "react-redux";

const HeaderContent = () => <h2 className="text-center">Create transaction</h2>;

const Content = () => {
  const [transactionValue, setTransactionValue] = useState(0);
  const [transactionCurrency, setTransactionCurrency] = useState(
    CurrencyEnum.ZLOTY,
  );
  const dispatch = useDispatch();

  function onSubmit(e: unknown) {
    (e as Event).preventDefault();

    console.log(transactionValue, transactionCurrency);

    dispatch(
      addTransaction({
        transactionValue,
        transactionCurrency,
      }),
    );
  }

  return (
    <form className="flex flex-col gap-[20px]" action="" onSubmit={onSubmit}>
      <input
        className="p-[10px]"
        style={{
          border: "1px solid red",
        }}
        type="text"
        placeholder="transactionValue"
        value={transactionValue}
        onChange={(e) => setTransactionValue(+e.target.value)}
      />
      <select
        className="p-[10px] text-black"
        style={{
          border: "1px solid red",
        }}
        value={transactionCurrency}
        onChange={(e) => setTransactionCurrency(e.target.value as CurrencyEnum)}
      >
        {Object.values(CurrencyEnum).map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
      <Button type="submit">Create</Button>
    </form>
  );
};

export default function CreateTransaction({
  isOpen,
  onModalChange,
}: Readonly<{
  isOpen: boolean;
  onModalChange: (state: boolean) => void;
}>) {
  return (
    <Modal
      isOpen={isOpen}
      onModalChange={onModalChange}
      HeaderContent={HeaderContent}
    >
      <Content />
    </Modal>
  );
}
