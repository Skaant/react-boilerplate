import React, { useCallback, useContext, useMemo, useState } from "react";
import { Building } from "../../../types/buildings/Building";
import { GameContext } from "../../../contexts/GameContext";
import { Zum } from "../../../types/zums/Zum";
import { BUILDINGS } from "../../../data/buildings/buildings.data";
import BuildingSelectionModule from "./BuildingSelectionModule";
import { UIContext } from "../../../contexts/ui/UIContext";
import BuildingSelectionZum from "./BuildingSelectionZum";
import { setSelection } from "../../../contexts/ui/helpers/setSelection";
import BuildingSelectionProps from "./BuildingSelectionProps";
import { mergeBuildingAndModulesProps } from "./_helpers/mergeBuildingAndModulesProps";
import { mergeBuildingAndModulesDataProps } from "./_helpers/mergeBuildingAndModulesDataProps";
import BuildingSelectionActions from "./actions/BuildingSelectionActions";

type Tab = "summary" | "residents" | "modules";

const TABS_NAMES: { [key in Tab]: string } = {
  summary: "Résumé",
  modules: "Modules",
  residents: "Résidents",
};

export default function BuildingSelection({
  building,
}: {
  building: Building;
}) {
  const [UI, setUI] = useContext(UIContext);
  const [game] = useContext(GameContext);
  const [tab, setTab] = useState<Tab>("summary");
  const data = useMemo(
    () =>
      building.step
        ? BUILDINGS[`${building.type}-${building.step}`]
        : BUILDINGS[building.type],
    [building.step, building.type]
  );
  const buildingAndModulesDataProps = useMemo(
    () => mergeBuildingAndModulesDataProps(building),
    [building]
  );
  const buildingAndModulesProps = useMemo(
    () => mergeBuildingAndModulesProps(building),
    [building]
  );
  const actions = useMemo(
    () => <BuildingSelectionActions building={building} />,
    [building]
  );
  const tabs = useMemo(() => {
    const tabs: Tab[] = [];
    if (buildingAndModulesDataProps.length) tabs.push("summary");
    tabs.push("modules");
    if (buildingAndModulesDataProps.find(({ type }) => type === "zums-slots"))
      tabs.push("residents");
    return tabs;
  }, [buildingAndModulesDataProps, buildingAndModulesProps]);
  const residents = useMemo(
    () =>
      game &&
      buildingAndModulesProps.residents?.map(
        (residentId) => game.zums[residentId]
      ),
    [buildingAndModulesProps.residents, game?.zums]
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
    <div className="overflow-auto pb-2">
      <label className="text-light-darker">Bâtiment</label>
      <h2 className="text-funnel">{data.name}</h2>
      {building.state === "dry" && (
        <div className="mt-2">
          <span className="badge-s bg-dark-lighter text-light">
            Statut : deshydraté
          </span>
        </div>
      )}
      <p>{data.description}</p>
      <div className="d-flex gap-1 mb-2">
        {tabs.map((_tab) => (
          <button
            key={_tab}
            className={`badge-m ${
              _tab === tab ? "bg-dark-lighter text-light" : "bg-light text-dark"
            }`}
            onClick={() => setTab(_tab)}
          >
            {TABS_NAMES[_tab]}
          </button>
        ))}
      </div>
      {tab === "summary" && (
        <>
          {actions && (
            <>
              <h3>Actions</h3>
              {actions}
            </>
          )}
          <h3>Propriétés</h3>
          <BuildingSelectionProps
            props={buildingAndModulesDataProps}
            object={buildingAndModulesProps}
          />
        </>
      )}
      {tab === "modules" && building.modules && (
        <div className="d-flex column gap-1">
          {building.modules.map((module) => (
            <BuildingSelectionModule key={module.id} module={module} />
          ))}
        </div>
      )}
      {tab === "residents" && residents && (
        <div className="d-flex column gap-1">
          {residents.map((resident) => (
            <BuildingSelectionZum
              key={resident.id}
              zum={resident}
              selectZum={selectZum}
            />
          ))}
        </div>
      )}
    </div>
  );
}
