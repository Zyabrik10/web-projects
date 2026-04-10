import { useState } from "react";

export default function useDisclosure() {
  const [isOpen, setIsOpen] = useState(false);

  function onOpenChange(state: boolean) {
    setIsOpen(state);
  }

  return { isOpen, onOpenChange };
}
