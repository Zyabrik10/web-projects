import { CSSProperties, useId } from "react";
import { Check } from "lucide-react";

import styles from "./Input.module.css";

type Props = Readonly<{
  value: boolean;
  setValue: (val: boolean) => void;
  onChange?: null | ((event: unknown, e: unknown) => void);
  className?: string;
  label?: string;
  size?: string;
  required?: boolean;
  style?: CSSProperties;
  [key: string]: unknown;
}>;

export default function CheckboxInput(props: Props) {
  const id = useId();

  if (props.label?.length) {
    return (
      <label
        className={`${styles["input-text-label"]} ${styles["input-variables"]} ${styles["checkbox"]}`}
        htmlFor={id}
      >
        <Checkbox {...props} id={id} />
        <span className={`${styles["label-text-container"]}`}>
          <span title={props.label} className={`${styles["label-text"]}`}>
            {props.label}
          </span>
          {props.required ? (
            <span className={`${styles["required"]}`}>★</span>
          ) : null}
        </span>
      </label>
    );
  }

  return <Checkbox {...props} id={id} />;
}

function Checkbox({
  value,
  setValue,
  className = "",
  id = "",
  size = "20px",
  style,
  onChange,
  ...props
}: Props & { id: string }) {
  return (
    <button
      {...props}
      style={{
        width: size,
        height: size,
        ...style,
      }}
      id={id}
      className={`${styles.input} ${styles["input-checkbox"]} ${value ? styles.checked : ""} ${className}`}
      onClick={(e) => {
        if (onChange && typeof onChange === "function") {
          onChange(!value, e);
        } else {
          setValue(!value);
        }
      }}
    >
      {value ? <Check strokeWidth={5} /> : null}
    </button>
  );
}
