import React, { useMemo } from "react";
import { BuildingProps } from "../../../data/buildings/_types/props/BuildingProps";
import { Building } from "../../../types/buildings/Building";
import { Module } from "../../../types/buildings/Module";
import { MergedBuildingOrModule } from "./_types/MergedBuildingOrModule";

const PROPS_PARSER: {
  [key in BuildingProps["type"]]: (
    prop: BuildingProps,
    object?: Building | Module | MergedBuildingOrModule
  ) => string | JSX.Element;
} = {
  "zums-slots": (prop, object) =>
    `+${prop.value} résidences Zums (${object?.["residents"]?.length || 0}/${
      prop.value
    })`,
  "wa-max": (prop) => `+${prop.value} Wa max`,
  "wa-prod": (prop) => `${prop.value < 0 ? "" : "+"}${prop.value} Wa/tour`,
  "jing-max": (prop) => `+${prop.value} Jing max`,
  "jing-prod": (prop) => `+${prop.value} Jing/tour`,
  "data-max": (prop) => `+${prop.value} Data max`,
};

export default function BuildingSelectionProps({
  props,
  object,
}: {
  props: BuildingProps[];
  object?: Building | Module | MergedBuildingOrModule;
}) {
  return (
    <>
      <ul>
        {props.map((prop) => (
          <li key={prop.type}>{PROPS_PARSER[prop.type]?.(prop, object)}</li>
        ))}
      </ul>
    </>
  );
}
