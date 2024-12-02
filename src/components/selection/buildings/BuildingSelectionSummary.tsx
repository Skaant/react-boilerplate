import React, { useMemo, useState } from "react";
import BuildingSelectionActions from "./actions/BuildingSelectionActions";
import { Building } from "../../../types/buildings/Building";
import BuildingSelectionProps from "./BuildingSelectionProps";
import { mergeBuildingDataProps } from "./_helpers/mergeBuildingDataProps/mergeBuildingDataProps";
import { mergeBuildingInstanceProps } from "./_helpers/mergeBuildingInstanceProps/mergeBuildingInstanceProps";
import { BuildingProps } from "../../../data/buildings/_types/props/BuildingProps";
import { BuildingInstanceProps } from "./_helpers/mergeBuildingInstanceProps/_types/BuildingInstanceProps";
import { BUILDINGS } from "../../../data/buildings/buildings.data";
import Collapsible from "../Collapsible";

export default function BuildingSelectionSummary({
  building,
  mergedBuildingDataProps,
  mergedBuildingInstanceProps,
}: {
  building: Building;
  mergedBuildingDataProps: BuildingProps[];
  mergedBuildingInstanceProps: BuildingInstanceProps;
}) {
  const [mode, setMode] = useState<"all" | "building">("all");
  const actions = useMemo(
    () => <BuildingSelectionActions building={building} />,
    [building]
  );
  const buildingDataProps = useMemo(
    () =>
      mode === "building"
        ? building.state
          ? undefined
          : (
              BUILDINGS[
                `${building.type}${building.step ? `-${building.step}` : ""}`
              ] as (typeof BUILDINGS)[keyof typeof BUILDINGS]
            ).props
        : mergedBuildingDataProps,
    [
      mode,
      building.state,
      building.type,
      building.step,
      mergedBuildingDataProps,
    ]
  );
  const disabledBuildingDataProps = useMemo(
    () =>
      mode === "building"
        ? building.state === "dry" &&
          (
            BUILDINGS[
              `${building.type}${building.step ? `-${building.step}` : ""}`
            ] as (typeof BUILDINGS)[keyof typeof BUILDINGS]
          ).props
        : building.state === "dry" && mergeBuildingDataProps(building, "dry"),
    [mode, building]
  );
  const buildingInstanceProps = useMemo(
    () =>
      mode === "building"
        ? (building as BuildingInstanceProps)
        : mergedBuildingInstanceProps,
    [mode, building, mergedBuildingInstanceProps]
  );
  const disabledBuildingInstanceProps = useMemo(
    () =>
      building.state === "dry"
        ? mode === "building"
          ? (building as BuildingInstanceProps)
          : mergeBuildingInstanceProps(building, "dry")
        : undefined,
    [building]
  );
  return (
    <>
      {actions && (
        <>
          <h3>Actions</h3>
          {actions}
        </>
      )}
      <Collapsible
        header={<h3>Propriétés</h3>}
        content={
          <div className="bg-light text-dark p-2">
            <div className="d-flex gap-1 align-center mb-2">
              <button
                className={`badge-s ${
                  mode === "all"
                    ? "bg-dark-lighter text-light"
                    : "bg-light-darker"
                }`}
                onClick={(ev) => {
                  setMode("all");
                  ev.stopPropagation();
                }}
              >
                Avec dvp. et modules
              </button>
              <button
                className={`badge-s ${
                  mode === "building"
                    ? "bg-dark-lighter text-light"
                    : "bg-light-darker"
                }`}
                onClick={(ev) => {
                  setMode("building");
                  ev.stopPropagation();
                }}
              >
                Bâtiment seul
              </button>
            </div>
            {buildingDataProps ? (
              <BuildingSelectionProps
                props={buildingDataProps}
                object={buildingInstanceProps}
                mode="dark"
              />
            ) : (
              <p className="text-dark-lightest mb-0">
                Pas de propriétés actives.
              </p>
            )}
            {building.state && disabledBuildingDataProps && (
              <Collapsible
                defaultOpen={false}
                header={<h4>Désactivées</h4>}
                content={
                  <BuildingSelectionProps
                    props={disabledBuildingDataProps}
                    object={disabledBuildingInstanceProps}
                    mode="dark"
                  />
                }
              />
            )}
          </div>
        }
      />
    </>
  );
}
