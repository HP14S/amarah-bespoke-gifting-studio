/**
 * WhatsApp number for enquiries, digits only with country code (e.g. "919876543210").
 * Left empty, links open WhatsApp with the message ready and let the visitor pick the chat.
 */
export const WHATSAPP_NUMBER = "";

export const INSTAGRAM_URL = "https://www.instagram.com/house_of_amarah_official__/";
export const INSTAGRAM_HANDLE = "@house_of_amarah_official__";

export function askPriceMessage(productName: string): string {
  return `Hello House of Amarah! I would like to ask for the price of ${productName}.`;
}

export const GENERAL_ENQUIRY_MESSAGE =
  "Hello House of Amarah! I have a gifting moment in mind and would love to talk it through.";

export function whatsappLink(message: string, number: string = WHATSAPP_NUMBER): string {
  const digits = number.replace(/\D/g, "");
  const base = digits ? `https://wa.me/${digits}` : "https://wa.me/";
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function askPriceLink(productName: string, number?: string): string {
  return whatsappLink(askPriceMessage(productName), number);
}
