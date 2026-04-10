"use client";

import { X } from "lucide-react";
import styles from "./Model.module.css";
import { ReactNode, useCallback, useEffect, useRef } from "react";
import Container from "../Container/Container";
import Button from "../Button/Button";

export default function Modal({
  children,
  HeaderContent,
  FooterContent,
  classes = {
    wrapper: "",
    content: "",
    header: "",
    footer: "",
    body: "",
    closeButton: "",
  },
  isOpen = false,
  onModalChange,
}: Readonly<{
  children?: ReactNode;
  HeaderContent?: () => ReactNode;
  FooterContent?: () => ReactNode;
  classes?: {
    wrapper: string;
    content: string;
    header: string;
    footer: string;
    body: string;
    closeButton: string;
  };
  isOpen: boolean;
  onModalChange: (state: boolean) => void;
}>) {
  const ref = useRef(null);

  const closeModal = useCallback(() => {
    onModalChange(false);
  }, [onModalChange]);

  const closeOnEscape = useCallback(
    ({ key }: KeyboardEvent) => {
      console.log(key);
      if (key === "Escape") {
        closeModal();
      }
    },
    [closeModal],
  );

  const closeOnBackground = useCallback(
    ({ currentTarget, target }: MouseEvent) => {
      if (target === currentTarget) {
        closeModal();
      }
    },
    [closeModal],
  );

  useEffect(() => {
    const background = ref.current!;

    if (!background) return;

    (background as HTMLDivElement).addEventListener("click", closeOnBackground);
    globalThis.addEventListener("keydown", closeOnEscape);

    return () => {
      (background as HTMLDivElement).removeEventListener(
        "click",
        closeOnBackground,
      );
      globalThis.removeEventListener("keydown", closeOnEscape);
    };
  }, [closeModal, closeOnEscape, closeOnBackground]);

  return (
    isOpen && (
      <div
        className={`${styles.wrapper} ${classes.wrapper} ${
          isOpen ? styles.active : ""
        }`}
        ref={ref}
      >
        <Container className={`${classes.content} ${styles.content}`}>
          <div className={`${styles.header} ${classes.header}`}>
            {HeaderContent?.()}
            <Button onClick={closeModal}>
              <X />
            </Button>
          </div>
          <div className={`${styles.body} ${classes.body}`}>{children}</div>
          <div className={`${styles.footer} ${classes.footer}`}>
            {FooterContent?.()}
          </div>
        </Container>
      </div>
    )
  );
}
