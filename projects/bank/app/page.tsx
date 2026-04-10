"use client";

import { History, MoneyHeader, Container } from "@/src/components";
import { addTransaction } from "@/src/redux";
import { CurrencyEnum } from "@/src/types";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      addTransaction({
        transactionValue: 13000,
        transactionCurrency: CurrencyEnum.ZLOTY,
      }),
    );

    dispatch(
      addTransaction({
        transactionValue: -190.99,
        transactionCurrency: CurrencyEnum.HRYWNA,
      }),
    );
  }, [dispatch]);

  return (
    <Container>
      <MoneyHeader />
      <History />
    </Container>
  );
}
