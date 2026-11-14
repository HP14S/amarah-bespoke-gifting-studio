import { useEffect, useId, useState, type FormEvent } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BESPOKE_ENQUIRY_ITEM, enquiryLink } from "@/lib/whatsapp";

import type { InquirySelection } from "./InquiryProvider";

const SELECTION_LABEL = {
  product: "Your enquiry",
  hamper: "Your selected hamper",
  general: "Your enquiry",
} as const;

const fieldClass =
  "block w-full rounded-sm border border-input bg-background px-4 py-2.5 text-base text-foreground sm:py-3 shadow-[inset_0_1px_2px_color-mix(in_oklab,var(--ink)_6%,transparent)] transition-colors placeholder:text-muted-foreground/80 focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/20 sm:text-sm";

export function InquiryDialog({
  open,
  onOpenChange,
  selection,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selection?: InquirySelection | undefined;
}) {
  const id = useId();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const kind = selection?.kind ?? "general";
  const item = selection?.item ?? BESPOKE_ENQUIRY_ITEM;

  useEffect(() => {
    if (!open) setPhoneError("");
  }, [open]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (phone.replace(/\D/g, "").length < 7) {
      setPhoneError("Please add a phone number we can reach you on.");
      return;
    }
    const url = enquiryLink({ item, name, phone, note });
    const win = window.open(url, "_blank");
    if (win) win.opener = null;
    else window.location.href = url;
    onOpenChange(false);
    setNote("");
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[calc(100dvh-1.5rem)] w-[calc(100%-1.5rem)] max-w-lg gap-0 overflow-y-auto overscroll-contain rounded-sm border-border bg-popover p-5 shadow-[var(--shadow-soft)] sm:w-full sm:rounded-sm sm:p-9 [&>button]:right-3 [&>button]:top-3 sm:[&>button]:right-4 sm:[&>button]:top-4 [&>button]:flex [&>button]:h-9 [&>button]:w-9 [&>button]:items-center [&>button]:justify-center [&>button]:rounded-full [&>button]:data-[state=open]:bg-transparent [&>button]:hover:bg-secondary">
        <DialogHeader className="space-y-0 pr-8 text-left">
          <p className="eyebrow text-[0.65rem] text-terracotta">A personal note</p>
          <DialogTitle className="mt-3 font-serif text-[2rem] font-normal leading-[1.05] tracking-normal text-foreground sm:text-4xl">
            Let&rsquo;s make it <em className="italic text-rose">meaningful.</em>
          </DialogTitle>
          <DialogDescription className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
            Share a few details and we&rsquo;ll open a ready-to-send WhatsApp message.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-5 border-l-2 sm:mt-6 border-rose bg-card px-5 py-4">
          <p className="eyebrow text-[0.6rem] text-muted-foreground">{SELECTION_LABEL[kind]}</p>
          <p className="mt-1.5 font-serif text-xl leading-snug text-foreground sm:text-2xl">
            {item}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4 sm:mt-6 sm:space-y-5">
          <div>
            <label htmlFor={`${id}-name`} className="text-sm font-medium text-foreground">
              Your name
            </label>
            <input
              id={`${id}-name`}
              name="name"
              required
              autoComplete="name"
              placeholder="What should we call you?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`mt-2 ${fieldClass}`}
            />
          </div>
          <div>
            <label htmlFor={`${id}-phone`} className="text-sm font-medium text-foreground">
              Phone number
            </label>
            <input
              id={`${id}-phone`}
              name="phone"
              type="tel"
              inputMode="tel"
              required
              autoComplete="tel"
              placeholder="Your WhatsApp number"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                if (phoneError) setPhoneError("");
              }}
              aria-invalid={phoneError ? true : undefined}
              aria-describedby={phoneError ? `${id}-phone-error` : undefined}
              className={`mt-2 ${fieldClass}`}
            />
            {phoneError && (
              <p id={`${id}-phone-error`} className="mt-2 text-xs text-terracotta">
                {phoneError}
              </p>
            )}
          </div>
          <div>
            <label htmlFor={`${id}-note`} className="text-sm font-medium text-foreground">
              A little more about your idea{" "}
              <span className="font-normal text-muted-foreground">(optional)</span>
            </label>
            <textarea
              id={`${id}-note`}
              name="note"
              rows={3}
              placeholder="The occasion, the person, or a detail you love…"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className={`mt-2 min-h-[5.5rem] resize-y sm:min-h-[6.5rem] ${fieldClass}`}
            />
          </div>

          <button
            type="submit"
            className="group flex w-full items-center justify-center gap-2.5 rounded-sm bg-primary px-6 py-4 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-[var(--shadow-soft)]"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
            Continue to WhatsApp
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <p className="text-center text-xs leading-relaxed text-muted-foreground">
            Your details are included in your message and are not saved on this site.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
