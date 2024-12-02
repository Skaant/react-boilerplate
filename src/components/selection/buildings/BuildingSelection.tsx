import React, { useCallback, useContext, useMemo, useState } from "react";
import { Building } from "../../../types/buildings/Building";
import { GameContext } from "../../../contexts/GameContext";
import { Zum } from "../../../types/zums/Zum";
import { BUILDINGS } from "../../../data/buildings/buildings.data";
import BuildingSelectionModule from "./BuildingSelectionModule";
import { UIContext } from "../../../contexts/ui/UIContext";
import BuildingSelectionZum from "./BuildingSelectionZum";
import { setSelection } from "../../../contexts/ui/helpers/setSelection";
import { mergeBuildingDataProps } from "./_helpers/mergeBuildingDataProps/mergeBuildingDataProps";
import { mergeBuildingInstanceProps } from "./_helpers/mergeBuildingInstanceProps/mergeBuildingInstanceProps";
import BuildingSelectionDevelopement from "./developments/BuildingSelectionDevelopement";
import BuildingSelectionSummary from "./BuildingSelectionSummary";

type Tab = "summary" | "developments" | "modules" | "residents";

const TABS_NAMES: { [key in Tab]: string } = {
  summary: "Résumé",
  developments: "Développements",
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
      (building.step
        ? BUILDINGS[`${building.type}-${building.step}`]
        : BUILDINGS[
            building.type
          ]) as (typeof BUILDINGS)[keyof typeof BUILDINGS],
    [building.step, building.type]
  );
  const buildingDataProps = useMemo(
    () => mergeBuildingDataProps(building),
    [building]
  );
  const buildingInstanceProps = useMemo(
    () => mergeBuildingInstanceProps(building),
    [building]
  );
  const tabs = useMemo(() => {
    const tabs: Tab[] = [];
    if (buildingDataProps.length) tabs.push("summary");
    if (data.developments) tabs.push("developments");
    if (data.modules) tabs.push("modules");
    if (buildingDataProps.find(({ type }) => type === "zums-slots"))
      tabs.push("residents");
    return tabs;
  }, [buildingDataProps, buildingInstanceProps]);
  const developmentDisabledNext = useMemo(
    () => game && game?.tutorial < 4,
    [game?.tutorial]
  );
  const residents = useMemo(
    () =>
      game &&
      buildingInstanceProps.residents?.map(
        (residentId) => game.zums[residentId]
      ),
    [buildingInstanceProps.residents, game?.zums]
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
        <BuildingSelectionSummary
          building={building}
          mergedBuildingDataProps={buildingDataProps}
          mergedBuildingInstanceProps={buildingInstanceProps}
        />
      )}
      {tab === "developments" && data.developments && (
        <div className="d-flex column gap-1">
          {Object.values(data.developments).map((_data) => (
            <BuildingSelectionDevelopement
              key={_data.type}
              building={building}
              development={building.developments?.[_data.type]}
              data={_data}
            />
          ))}
        </div>
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
