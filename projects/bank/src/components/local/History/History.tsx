"use client";

import { Button, CreateTransaction } from "@/src/components";
import { useDisclosure } from "@/src/hooks";
import Trans from "../Trans/Trans";
import { useSelector } from "react-redux";
import { getAccount } from "@/src/redux/selectors";
import { useMemo } from "react";

export default function History() {
  const { isOpen, onOpenChange } = useDisclosure();

  const { transactions } = useSelector(getAccount);

  const filteredTransactions = useMemo(() => {
    const h = [...transactions];
    console.log(h);    
    h.sort((a, b) => b.date - a.date);
    console.log(h);    

    return h;
  }, [transactions]);

  return (
    <>
      <table className="mb-[20px] w-full border-collapse border border-slate-400">
        <thead className="bg-gray-200 text-left text-black">
          <tr className="uppercase">
            <th className="p-1">ID</th>
            <th className="p-1">value</th>
            <th className="p-1">converted value</th>
            <th className="p-1">before</th>
            <th className="p-1">after</th>
            <th className="p-1">date</th>
            <th className="p-1">action</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => {
            return (
              <tr className="p-1" key={transaction.id}>
                <Trans {...transaction} />
              </tr>
            );
          })}
        </tbody>
      </table>
      <Button onClick={() => onOpenChange(true)}>Create transaction</Button>
      <CreateTransaction isOpen={isOpen} onModalChange={onOpenChange} />
    </>
  );
}
