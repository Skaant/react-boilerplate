import { Building } from "../../../types/buildings/Building";
import { DOM_SVG_HEIGHT, DOM_SVG_WIDTH } from "../../svg/DomSvg";
import {
  KOLOS_SEED_SVG_HEIGHT,
  KOLOS_SEED_SVG_WIDTH,
} from "../../svg/KolosSeedSvg";
import {
  KOLOS_SEED_TRANSIT_SVG_HEIGHT,
  KOLOS_SEED_TRANSIT_SVG_WIDTH,
} from "../../svg/KolosSeedTransitSvg";

export const BUILDINGS_DIMENSIONS: {
  [key: string]: { width: number; height: number };
} = {
  "seed-vessel-1": {
    width: KOLOS_SEED_TRANSIT_SVG_WIDTH,
    height: KOLOS_SEED_TRANSIT_SVG_HEIGHT,
  },
  "seed-vessel-2": {
    width: KOLOS_SEED_SVG_WIDTH,
    height: KOLOS_SEED_SVG_HEIGHT,
  },
  dom: {
    width: DOM_SVG_WIDTH,
    height: DOM_SVG_HEIGHT,
  },
};
