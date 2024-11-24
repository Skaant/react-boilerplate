import React from "react";
import { Cell } from "../../types/grid/Cell";

export default function CellSelection({ cell }: { cell: Cell }) {
  return (
    <div>
      <label className="text-light-darker">{`Case (x,y) : ${cell.id}`}</label>
      <h2 className="text-funnel">
        {cell.type === "ground" ? "Sol" : "Espace"}
      </h2>
      {cell.type.startsWith("space") && <p>Il fait un peu froid ici.</p>}
      {cell.type === "ground" && <p>{`Niveau de waïld : ${cell.waild}`}</p>}
    </div>
  );
}
