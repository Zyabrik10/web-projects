"use client";

import { Transaction } from "@/src/types";
import { Button } from "@/src/components";
import { formatMoney } from "@/src/utils";

export default function Trans({
  id,
  date,
  moneyAfter,
  moneyBefore,
  transactionValue,
  transactionCurrency,
  currentCurrency,
  convertedValue,
}: Readonly<Transaction>) {
  return (
    <>
      <td>{id.substring(0, 4)}</td>
      <td>
        <span
          className={`${transactionValue > 0 ? "text-[green]" : "text-[red]"}`}
        >
          {transactionValue >= 0 ? "+" : "-"}
          {formatMoney(transactionValue)} {transactionCurrency}
        </span>
      </td>
      <td>
        {formatMoney(convertedValue)}
        {currentCurrency}
      </td>
      <td>
        {formatMoney(moneyBefore)}
        {currentCurrency}
      </td>
      <td>
        {formatMoney(moneyAfter)} {currentCurrency}
      </td>
      <td>{new Date(date).getUTCDate()}</td>
      <td>
        <Button>!</Button>
      </td>
    </>
  );
}
