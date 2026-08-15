"use client";

import CheckboxInput from "./CheckboxInput";
import NumberInput from "./NumberInput";
import TextInput from "./TextInput";
import FileInput from "./FileInput";
import TextareaInput from "./TextareaInput";

type Props = Readonly<{
  type?:
    | "text"
    | "checkbox"
    | "slider"
    | "switcher"
    | "radio"
    | "number"
    | "file"
    | "textarea";
  onChange?: (val: unknown, event?: unknown) => void;
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

  if (type === "file") {
    return (
      <FileInput
        label={props.label as string}
        value={props.value}
        onChange={onChange}
        setValue={props.setValue as (val: unknown) => void}
        {...props}
      />
    );
  }

  if (type === "textarea") {
    return (
      <TextareaInput
        value={props.value as string}
        onChange={onChange}
        setValue={props.setValue as (val: unknown) => void}
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
