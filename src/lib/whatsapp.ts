/**
 * WhatsApp number for enquiries, digits only with country code (e.g. "919876543210").
 * Left empty, links open WhatsApp with the message ready and let the visitor pick the chat.
 */
export const WHATSAPP_NUMBER = "";

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
