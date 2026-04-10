'use client';

import styles from "./Section.module.css";

export default function Section({
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
    <div className={`${styles["section"]} ${className}`} {...props}>
      {children}
    </div>
  );
}
