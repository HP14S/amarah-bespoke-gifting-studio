import { describe, expect, it } from "vitest";

import { askPriceLink, askPriceMessage } from "./whatsapp";

describe("Ask for Price WhatsApp link", () => {
  it("prefills the message with the product name", () => {
    expect(askPriceMessage("Festival Gift Hampers")).toBe(
      "Hello House of Amarah! I would like to ask for the price of Festival Gift Hampers.",
    );
  });

  it("links to wa.me with the encoded message", () => {
    const url = new URL(askPriceLink("Scented & Wellness Candles", "+91 98765 43210"));
    expect(url.origin + url.pathname).toBe("https://wa.me/919876543210");
    expect(url.searchParams.get("text")).toBe(
      "Hello House of Amarah! I would like to ask for the price of Scented & Wellness Candles.",
    );
  });
});
