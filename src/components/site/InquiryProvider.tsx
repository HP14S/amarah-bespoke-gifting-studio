import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

import { InquiryDialog } from "./InquiryDialog";

export type InquiryKind = "product" | "hamper" | "general";
export type InquirySelection = { item: string; kind: InquiryKind };

type InquiryContextValue = { openInquiry: (selection?: InquirySelection) => void };

const InquiryContext = createContext<InquiryContextValue | null>(null);

export function InquiryProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState<InquirySelection | undefined>();

  const openInquiry = useCallback((next?: InquirySelection) => {
    setSelection(next);
    setOpen(true);
  }, []);

  const value = useMemo(() => ({ openInquiry }), [openInquiry]);

  return (
    <InquiryContext.Provider value={value}>
      {children}
      <InquiryDialog open={open} onOpenChange={setOpen} selection={selection} />
    </InquiryContext.Provider>
  );
}

export function useInquiry() {
  const ctx = useContext(InquiryContext);
  if (!ctx) throw new Error("useInquiry must be used inside <InquiryProvider>");
  return ctx;
}
