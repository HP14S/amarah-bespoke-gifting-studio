/** Studio contacts, kept together so phone and WhatsApp links stay consistent. */
export const CONTACT_NUMBERS = [
  { label: "+44 7384 182573", digits: "447384182573" },
  { label: "+44 7348 337874", digits: "447348337874" },
] as const;

export const WHATSAPP_NUMBER = CONTACT_NUMBERS[1].digits;

export const INSTAGRAM_URL = "https://www.instagram.com/house_of_amarah_official__/";
export const INSTAGRAM_HANDLE = "@house_of_amarah_official__";

export const GENERAL_ENQUIRY_MESSAGE =
  "Hello House of Amarah! I have a gifting moment in mind and would love to talk it through.";

/** Item name used when the visitor opens a general, bespoke enquiry. */
export const BESPOKE_ENQUIRY_ITEM = "A bespoke gift, made for my moment";

export type EnquiryDetails = {
  item: string;
  name: string;
  phone: string;
  note?: string;
};

export function enquiryMessage({ item, name, phone, note }: EnquiryDetails): string {
  const lines = [
    `Hello House of Amarah! I would like to enquire about: ${item.trim()}.`,
    `My name is ${name.trim()}.`,
    `My phone number is ${phone.trim()}.`,
  ];
  const extra = note?.trim();
  if (extra) lines.push(`A little more about what I have in mind: ${extra}`);
  lines.push("Please share the price and details.");
  return lines.join("\n");
}

export function whatsappLink(message: string, number: string = WHATSAPP_NUMBER): string {
  const digits = number.replace(/\D/g, "");
  const base = digits ? `https://wa.me/${digits}` : "https://wa.me/";
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function enquiryLink(details: EnquiryDetails, number?: string): string {
  return whatsappLink(enquiryMessage(details), number);
}
