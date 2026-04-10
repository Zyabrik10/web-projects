'use client';

import { formatMoney } from "@/src/utils";
import { Section } from "@/src/components";
import { useSelector } from "react-redux";
import { getAccount } from "@/src/redux/selectors";

export default function MoneyHeader() {
  const { money, currency } = useSelector(getAccount);
  return (
    <Section>
      <h1 className="text-7xl text-[#1cbb1c]">
        {formatMoney(money)} {currency}
      </h1>
    </Section>
  );
}
