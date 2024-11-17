import React from "react";
import { Cell } from "../../types/grid/Cell";

export default function CellSelection({ cell }: { cell: Cell }) {
  return (
    <div className="d-flex">
      <div className="bg-dark-lightest text-light">
        <label className="text-dark-lighter">CASE</label>
        <h2 className="text-funnel">{`x : ${cell.x}, y : ${cell.y}`}</h2>
        <p>{`Niveau de waïld : ${cell.waild}`}</p>
      </div>
    </div>
  );
}
