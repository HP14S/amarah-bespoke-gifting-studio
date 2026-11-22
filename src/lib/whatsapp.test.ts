import { describe, expect, it } from "vitest";

import { CONTACT_NUMBERS, WHATSAPP_NUMBER, enquiryLink, enquiryMessage } from "./whatsapp";

describe("Studio contact numbers", () => {
  it("lists both supplied UK phone numbers", () => {
    expect(CONTACT_NUMBERS).toEqual([
      { label: "+44 7384 182573", digits: "447384182573" },
      { label: "+44 7348 337874", digits: "447348337874" },
    ]);
  });

  it("directs enquiries to the second number on WhatsApp", () => {
    expect(WHATSAPP_NUMBER).toBe("447348337874");
    const url = new URL(enquiryLink({ item: "Candle Bouquet", name: "Sam", phone: "07700900123" }));
    expect(url.origin + url.pathname).toBe("https://wa.me/447348337874");
  });
});

describe("Enquiry WhatsApp message", () => {
  it("includes the item, name and phone, and asks for price and details", () => {
    expect(
      enquiryMessage({
        item: "Scented & Wellness Candles",
        name: "Meera",
        phone: "+91 98765 43210",
      }),
    ).toBe(
      [
        "Hello House of Amarah! I would like to enquire about: Scented & Wellness Candles.",
        "My name is Meera.",
        "My phone number is +91 98765 43210.",
        "Please share the price and details.",
      ].join("\n"),
    );
  });

  it("adds the visitor's idea only when they wrote one", () => {
    const msg = enquiryMessage({
      item: "Return Gifts",
      name: "Meera",
      phone: "9876543210",
      note: "  Birthday for 20 kids  ",
    });
    expect(msg.split("\n")[3]).toBe(
      "A little more about what I have in mind: Birthday for 20 kids",
    );
    expect(enquiryMessage({ item: "x", name: "y", phone: "1", note: "   " })).not.toContain(
      "A little more",
    );
  });

  it("opens wa.me with the encoded message when no studio number is set", () => {
    const url = new URL(enquiryLink({ item: "Peony", name: "A", phone: "1" }, ""));
    expect(url.origin + url.pathname).toBe("https://wa.me/");
    expect(url.searchParams.get("text")).toContain("enquire about: Peony.");
  });

  it("goes straight to the studio chat once a number is set", () => {
    const url = new URL(enquiryLink({ item: "Peony", name: "A", phone: "1" }, "+91 98765 43210"));
    expect(url.pathname).toBe("/919876543210");
  });
});
