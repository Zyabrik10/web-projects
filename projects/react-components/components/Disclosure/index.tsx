import { ReactNode, useState } from "react";
import styles from "./Disclosure.module.css";
import { ChevronUp } from "lucide-react";

type Props = Readonly<{
  children: ReactNode | ReactNode[];
  title: string;
  open?: boolean;
}>;

export default function Hide({ children, title, open = false }: Props) {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <div>
      <button
        className={`${styles["disclosure-button"]}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className={`${styles["arrow"]} ${isOpen ? styles["up"] : ""}`}>
          <ChevronUp />
        </span>
      </button>
      <div
        className={`${styles["disclosure-content"]} ${isOpen ? styles["active"] : ""}`}
      >
        {children}
      </div>
    </div>
  );
}
