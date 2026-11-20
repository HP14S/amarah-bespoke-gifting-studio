/**
 * Every studio photo with a small and a large CDN copy, so phones download the small one.
 * Use with <img src srcSet sizes> (see PhotoFigure).
 */
import bookGiftLg from "@/assets/photos/house-of-amarah-book-gift.webp.asset.json";
import bookGiftSm from "@/assets/photos/house-of-amarah-book-gift-800.webp.asset.json";
import chocolateBouquetLg from "@/assets/photos/house-of-amarah-chocolate-bouquet-900.webp.asset.json";
import chocolateBouquetSm from "@/assets/photos/house-of-amarah-chocolate-bouquet-480.webp.asset.json";
import customPerfumesLg from "@/assets/photos/house-of-amarah-custom-perfumes-900.webp.asset.json";
import customPerfumesSm from "@/assets/photos/house-of-amarah-custom-perfumes-480.webp.asset.json";
import festivalHamperLg from "@/assets/photos/house-of-amarah-festival-hamper-1200.webp.asset.json";
import festivalHamperSm from "@/assets/photos/house-of-amarah-festival-hamper-600.webp.asset.json";
import heroLg from "@/assets/photos/house-of-amarah-hero.webp.asset.json";
import heroSm from "@/assets/photos/house-of-amarah-hero-800.webp.asset.json";
import miniatureFramesLg from "@/assets/photos/house-of-amarah-miniature-frames-900.webp.asset.json";
import miniatureFramesSm from "@/assets/photos/house-of-amarah-miniature-frames-480.webp.asset.json";
import occasionLetterLg from "@/assets/photos/house-of-amarah-occasion-letter-D3y-s3DX.webp.asset.json";
import occasionLetterSm from "@/assets/photos/house-of-amarah-occasion-letter-D3y-s3DX-800.webp.asset.json";
import photoFramesLg from "@/assets/photos/house-of-amarah-photo-frames-900.webp.asset.json";
import photoFramesSm from "@/assets/photos/house-of-amarah-photo-frames-480.webp.asset.json";
import photoMugsLg from "@/assets/photos/house-of-amarah-photo-mugs-900.webp.asset.json";
import photoMugsSm from "@/assets/photos/house-of-amarah-photo-mugs-480.webp.asset.json";

// Client photos (studio's own work)
import birthdayCardLg from "@/assets/photos/house-of-amarah-birthday-card-gift-1200.webp.asset.json";
import birthdayCardSm from "@/assets/photos/house-of-amarah-birthday-card-gift-600.webp.asset.json";
import candleBouquetLg from "@/assets/photos/house-of-amarah-candle-bouquet-basket-1200.webp.asset.json";
import candleBouquetSm from "@/assets/photos/house-of-amarah-candle-bouquet-basket-600.webp.asset.json";
import candleOrangeBloomLg from "@/assets/photos/house-of-amarah-candle-orange-bloom-1200.webp.asset.json";
import candleOrangeBloomSm from "@/assets/photos/house-of-amarah-candle-orange-bloom-600.webp.asset.json";
import candlePeonyLg from "@/assets/photos/house-of-amarah-candle-peony-1200.webp.asset.json";
import candlePeonySm from "@/assets/photos/house-of-amarah-candle-peony-600.webp.asset.json";
import candleTeddyLg from "@/assets/photos/house-of-amarah-candle-teddy-1200.webp.asset.json";
import candleTeddySm from "@/assets/photos/house-of-amarah-candle-teddy-600.webp.asset.json";
import customHamperLg from "@/assets/photos/house-of-amarah-custom-hamper-box-1200.webp.asset.json";
import customHamperSm from "@/assets/photos/house-of-amarah-custom-hamper-box-600.webp.asset.json";
import ledFramesLg from "@/assets/photos/house-of-amarah-led-frame-anniversary-1200.webp.asset.json";
import ledFramesSm from "@/assets/photos/house-of-amarah-led-frame-anniversary-600.webp.asset.json";
import returnGiftsLg from "@/assets/photos/house-of-amarah-return-gift-teddy-globe-1200.webp.asset.json";
import returnGiftsSm from "@/assets/photos/house-of-amarah-return-gift-teddy-globe-600.webp.asset.json";
import signatureBagLg from "@/assets/photos/house-of-amarah-signature-gift-bag-1200.webp.asset.json";
import signatureBagSm from "@/assets/photos/house-of-amarah-signature-gift-bag-600.webp.asset.json";

export type Photo = { src: string; srcSet: string; width: number; height: number };

function photo(
  small: { url: string },
  smallWidth: number,
  large: { url: string },
  width: number,
  height: number,
): Photo {
  return {
    src: large.url,
    srcSet: `${small.url} ${smallWidth}w, ${large.url} ${width}w`,
    width,
    height,
  };
}

export const PHOTOS = {
  hero: photo(heroSm, 800, heroLg, 1600, 892),
  signatureBag: photo(signatureBagSm, 600, signatureBagLg, 1200, 1594),
  candlePeony: photo(candlePeonySm, 600, candlePeonyLg, 1200, 1594),
  candleOrangeBloom: photo(candleOrangeBloomSm, 600, candleOrangeBloomLg, 1200, 1594),
  candleTeddy: photo(candleTeddySm, 600, candleTeddyLg, 1200, 1594),
  bookGift: photo(bookGiftSm, 800, bookGiftLg, 1600, 892),
  occasionLetter: photo(occasionLetterSm, 800, occasionLetterLg, 1600, 892),
  returnGifts: photo(returnGiftsSm, 600, returnGiftsLg, 1200, 1594),
  customHamper: photo(customHamperSm, 600, customHamperLg, 1200, 1594),
  festivalHamper: photo(festivalHamperSm, 600, festivalHamperLg, 1200, 1504),
  candleBouquet: photo(candleBouquetSm, 600, candleBouquetLg, 1200, 1594),
  chocolateBouquet: photo(chocolateBouquetSm, 480, chocolateBouquetLg, 900, 1125),
  photoFrames: photo(photoFramesSm, 480, photoFramesLg, 900, 1125),
  miniatureFrames: photo(miniatureFramesSm, 480, miniatureFramesLg, 900, 1125),
  ledFrames: photo(ledFramesSm, 600, ledFramesLg, 1200, 2133),
  photoMugs: photo(photoMugsSm, 480, photoMugsLg, 900, 1125),
  customCards: photo(birthdayCardSm, 600, birthdayCardLg, 1200, 1594),
  customPerfumes: photo(customPerfumesSm, 480, customPerfumesLg, 900, 1125),
} satisfies Record<string, Photo>;
