import React, { useCallback, useContext, useMemo } from "react";
import { Module } from "../../../types/buildings/Module";
import { MODULES } from "../../../data/buildings/modules/modules.data";
import BuildingSelectionProps from "./BuildingSelectionProps";
import { HasResidents } from "../../../types/buildings/attributes/HasResidents";
import { GameContext } from "../../../contexts/GameContext";
import { UIContext } from "../../../contexts/ui/UIContext";
import { Zum } from "../../../types/zums/Zum";
import { setSelection } from "../../../contexts/ui/helpers/setSelection";

export default function BuildingSelectionModule({
  module,
}: {
  module: Module;
}) {
  const [UI, setUI] = useContext(UIContext);
  const [game] = useContext(GameContext);
  const { state, type } = module;
  const data = useMemo(() => MODULES[type], [type]);
  const zumsSlots = useMemo(
    () => data.props.find(({ type }) => type === "zums-slots"),
    [data]
  );
  const residents = useMemo(
    () =>
      zumsSlots
        ? [...Array(zumsSlots.value)].map((_, index) => {
            const zumId = (module as HasResidents).residents[index];
            return game!.zums[zumId]!;
          })
        : undefined,
    [game, module, zumsSlots]
  );
  const selectZum = useCallback(
    (zumId: Zum["id"]) =>
      setSelection([UI, setUI], {
        type: "zum",
        id: zumId,
      }),
    [UI]
  );
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
      <BuildingSelectionProps props={data.props} object={module} />
      {residents && (
        <>
          <h4>Résidents</h4>
          <div className="d-flex gap-1">
            {residents.map(({ id, name, state }) => (
              <button
                key={id}
                className={`badge-s ${
                  state === "dry" ? "bg-dark-lighter text-light" : "bg-zum"
                } text-light`}
                onClick={() => selectZum(id)}
              >
                {name}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
