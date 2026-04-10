'use client';

import styles from "./Container.module.css";

export default function Container({
  children,
  className = "",
  ...props
}: Readonly<
  {
    children: React.ReactNode;
    centered?: boolean;
    className?: string;
  } & React.HTMLAttributes<HTMLDivElement>
>) {
  return (
    <div
      className={`${styles["container"]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}