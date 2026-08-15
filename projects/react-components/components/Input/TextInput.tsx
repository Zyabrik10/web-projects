import { CSSProperties, useId } from "react";
import styles from "./Input.module.css";

type Props = Readonly<{
  value: string;
  setValue: (val: string) => void;
  onChange?: null | ((text: string, e: unknown) => void);
  className?: string;
  label?: string;
  required?: boolean;
  width?: string;
  style?: CSSProperties;
  [key: string]: unknown;
}>;

export default function TextInput(props: Props) {
  const id = useId();

  if (props.label?.length) {
    return (
      <label
        className={`${styles["input-text-label"]}`}
        style={{
          maxWidth:
            props.width && props.width.length > 0 ? props.width : "100%",
        }}
        htmlFor={id}
      >
        <span className={`${styles["label-text-container"]}`}>
          <span title={props.label} className={`${styles["label-text"]}`}>
            {props.label}
          </span>
          {props.required ? (
            <span className={`${styles["required"]}`}>★</span>
          ) : null}
        </span>

        <Input {...props} id={id} />
      </label>
    );
  }

  return <Input {...props} id={id} />;
}

function Input({
  value,
  setValue,
  className = "",
  id = "",
  onChange,
  style,
  ...props
}: Props & { id: string }) {
  return (
    <input
      {...props}
      style={{
        maxWidth: props.width && props.width.length > 0 ? props.width : "100%",
        ...style,
      }}
      id={id}
      className={`${styles["input"]} ${className || ""}`}
      type="text"
      value={value}
      onChange={(e: unknown) => {
        const input = (e as Event).target as HTMLInputElement;
        const text = input.value;

        if (onChange && typeof onChange === "function") {
          onChange(text, e);
        } else {
          setValue(text);
        }
      }}
    />
  );
}
