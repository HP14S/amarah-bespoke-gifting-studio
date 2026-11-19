import { describe, expect, it } from "vitest";

import { GIFTS_STARTING_PRICE, startingPriceLabel } from "./pricing";

describe("Starting prices", () => {
  it("gifts start from £3", () => {
    expect(GIFTS_STARTING_PRICE).toBe(3);
    expect(startingPriceLabel()).toBe("From £3");
  });

  it("shows pence when a price is not a whole number", () => {
    expect(startingPriceLabel(4.5)).toBe("From £4.50");
  });
});
