import { GameContextData } from "../GameContext";

export function moveZum(
  id: string,
  direction: "up" | "down" | "left" | "right",
  [game, setGame]: [
    GameContextData,
    React.Dispatch<React.SetStateAction<GameContextData>>
  ]
) {
  if (!game) return;
  const zums = { ...game.zums };
  const cells = { ...game.cells };
  const zum = { ...zums[id] };
  const cell = { ...cells[zum.cell] };
  const newX =
    cell.x + (direction === "left" ? -1 : direction === "right" ? 1 : 0);
  const newY =
    cell.y + (direction === "up" ? -1 : direction === "down" ? 1 : 0);
  const newCell = cells[`${newX},${newY}`] && {
    ...cells[`${newX},${newY}`],
  };
  if (!newCell) return;
  cell.zums = cell.zums.filter((z) => z !== id);
  cells[cell.id] = cell;
  newCell.zums.push(id);
  zums[id] = zum;
  zum.cell = newCell.id;
  cells[newCell.id] = newCell;
  setGame({ ...game, zums, cells });
}
