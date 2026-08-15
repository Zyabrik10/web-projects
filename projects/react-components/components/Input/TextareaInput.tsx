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
  height?: string;
  style?: CSSProperties;
  [key: string]: unknown;
}>;

export default function TextareaInput(props: Props) {
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

        <Textarea {...props} id={id} />
      </label>
    );
  }

  return <Textarea {...props} id={id} />;
}

function Textarea({
  value,
  setValue,
  className = "",
  id = "",
  onChange,
  style,
  ...props
}: Props & { id: string }) {
  return (
    <textarea
      {...props}
      style={{
        minHeight:
          props.height && props.height.length > 0 ? props.height : "200px",
        maxWidth: props.width && props.width.length > 0 ? props.width : "100%",
        ...style,
      }}
      id={id}
      className={`${styles["input"]} ${styles["textarea"]} ${className || ""}`}
      value={value}
      onChange={(e: unknown) => {
        const input = (e as Event).target as HTMLTextAreaElement;
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
