import { Building } from "../../../types/buildings/Building";
import { DOM_SVG_HEIGHT, DOM_SVG_WIDTH } from "../../svg/DomSvg";
import {
  KOLOS_SEED_SVG_HEIGHT,
  KOLOS_SEED_SVG_WIDTH,
} from "../../svg/KolosSeedSvg";

export const BUILDINGS_DIMENSIONS: {
  [key in Building["type"]]: { width: number; height: number };
} = {
  "kolos-seed": {
    width: KOLOS_SEED_SVG_WIDTH,
    height: KOLOS_SEED_SVG_HEIGHT,
  },
  dom: {
    width: DOM_SVG_WIDTH,
    height: DOM_SVG_HEIGHT,
  },
};
