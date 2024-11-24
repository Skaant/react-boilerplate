import React, { useContext, useMemo } from "react";
import { Cell } from "../../../types/grid/Cell";
import { ConfigContext } from "../../../contexts/ConfigContext";
import BackgroundSwitcher from "./BackgroundSwitcher";
import { UIContext } from "../../../contexts/ui/UIContext";
import { CONFIG } from "../../../data/config.data";

export default function Cell({
  cell,
  onClick,
}: {
  cell: Cell;
  onClick: (id: Cell["id"]) => void;
}) {
  const [UI] = useContext(UIContext);
  const cellSize = useMemo(
    () => UI && (CONFIG.CELL_SIZE * 3) / UI.zoom,
    [UI?.zoom]
  );
  return cellSize === undefined ? (
    <></>
  ) : (
    <BackgroundSwitcher cell={cell} cellSize={cellSize} onClick={onClick} />
  );
}
