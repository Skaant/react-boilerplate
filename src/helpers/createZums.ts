import { Index } from "../types/Index";
import { Zum } from "../types/zums/Zum";
import { createZum } from "./createZum";

export function createZums(count: number, ...zums: Partial<Zum>[]): Index<Zum> {
  return [...Array(count)].reduce((_zums, _, index) => {
    const zum = createZum(_zums, zums[index] || {});
    _zums[zum.id] = zum;
    return _zums;
  }, {} as Index<Zum>);
}
