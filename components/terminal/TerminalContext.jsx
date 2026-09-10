"use client";

import { createContext, useContext, useMemo, useState } from "react";

const TerminalContext = createContext(null);

export function TerminalProvider({ children }) {
  const [open, setOpen] = useState(false);
  const value = useMemo(
    () => ({
      open,
      setOpen,
      toggle: () => setOpen((current) => !current),
      close: () => setOpen(false),
    }),
    [open]
  );

  return <TerminalContext.Provider value={value}>{children}</TerminalContext.Provider>;
}

export function useTerminal() {
  const context = useContext(TerminalContext);
  if (!context) throw new Error("useTerminal must be used inside TerminalProvider");
  return context;
}
