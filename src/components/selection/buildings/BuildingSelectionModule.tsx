import React, { useMemo } from "react";
import { Module } from "../../../types/buildings/Module";
import { MODULES } from "../../../data/buildings/modules/modules.data";
import BuildingSelectionProps from "./BuildingSelectionProps";

export default function BuildingSelectionModule({
  module,
}: {
  module: Module;
}) {
  const { state, type } = module;
  const data = useMemo(() => MODULES[type], [type]);
  return (
    <div
      className={`p-2 ${
        state === "dry"
          ? "bg-dark-lighter text-light"
          : "bg-light text-dark-lighter"
      }`}
    >
      <div className="d-flex justify-between align-center">
        <h3 className="mt-0 mb-0">{data.name}</h3>
        {state === "dry" && (
          <span className="badge-s bg-light text-dark-lighter">
            Statut : deshydraté
          </span>
        )}
      </div>
      <p>{data.description}</p>
      <BuildingSelectionProps
        props={data.props}
        object={module}
        mode={state ? "light" : "dark"}
      />
    </div>
  );
}
