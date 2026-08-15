import { ChangeEvent, CSSProperties, useId } from "react";
import styles from "./Input.module.css";

type Props = Readonly<{
  setValue: (val: unknown) => void;
  onChange?:
    | null
    | ((
        fileContent:
          | string
          | ArrayBuffer
          | null
          | undefined
          | ProgressEvent<FileReader>,
        event: unknown,
      ) => void);
  className?: string;
  label: string;
  required?: boolean;
  width?: string;
  style?: CSSProperties;
  [key: string]: unknown;
}>;

export default function FileInput(props: Props) {
  const id = useId();

  return (
    <label
      className={`${styles["input"]} ${styles["input-variables"]}`}
      style={{
        maxWidth: props.width && props.width.length > 0 ? props.width : "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
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

function Input({
  setValue,
  onChange,
  className = "",
  id = "",
  ...props
}: Props & { id: string }) {
  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      const content = event.target?.result;
      if (onChange && typeof onChange === "function") {
        onChange?.(content, e);
      } else {
        setValue?.(content);
      }
    };

    reader.onerror = (error) => {
      if (onChange && typeof onChange === "function") {
        onChange?.(error, e);
      } else {
        setValue?.(error);
      }
    };

    reader.readAsText(file);
  };

  return (
    <input
      {...props}
      style={{
        display: "none",
      }}
      id={id}
      className={`${styles["input"]} ${className}`}
      type="file"
      onChange={handleFileChange}
    />
  );
}
