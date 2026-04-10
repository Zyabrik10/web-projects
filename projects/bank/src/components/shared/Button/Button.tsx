"use client";

import { ReactNode } from "react";
import styles from "./Button.module.css";

export default function Button({
  children,
  className,
  onClick,
  type = "button",
}: Readonly<{
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
}>) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${className}`}
    >
      {children}
    </button>
  );
}
