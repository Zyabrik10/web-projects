"use client";

import CheckboxInput from "./CheckboxInput";
import NumberInput from "./NumberInput";
import TextInput from "./TextInput";

type Props = Readonly<{
  type?: "text" | "checkbox" | "slider" | "switcher" | "radio" | "number";
  onChange?: (event: unknown) => void;
  [key: string]: unknown;
}>;

export default function Input({ type = "text", onChange, ...props }: Props) {
  if (type === "checkbox") {
    return (
      <CheckboxInput
        value={props.value as boolean}
        onChange={onChange}
        setValue={props.setValue as (val: boolean) => void}
        {...props}
      />
    );
  }

  if (type === "number") {
    return (
      <NumberInput
        value={props.value as number}
        onChange={onChange}
        setValue={props.setValue as (val: number) => void}
        {...props}
      />
    );
  }

  return (
    <TextInput
      value={props.value as string}
      onChange={onChange}
      setValue={props.setValue as (val: string) => void}
      {...props}
    />
  );
}
