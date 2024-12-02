import React, { useContext, useMemo } from "react";
import { upgradeDevelopment } from "../../../../use-cases/_buildings/upgradeDevelopment";
import { GameContext } from "../../../../contexts/GameContext";
import {
  BuildingDataDevelopment,
  CostsAndProps,
} from "../../../../data/buildings/_types/BuildingData";
import {
  Building,
  BuildingDevelopment,
} from "../../../../types/buildings/Building";
import { getDataDevelopmentsProps } from "../_helpers/mergeBuildingDataProps/getDataDevelopmentsProps";
import { mergeBuildingDataProps } from "../_helpers/mergeBuildingDataProps/mergeBuildingDataProps";
import { mergeBuildingInstanceProps } from "../_helpers/mergeBuildingInstanceProps/mergeBuildingInstanceProps";
import { BuildingInstanceProps } from "../_helpers/mergeBuildingInstanceProps/_types/BuildingInstanceProps";
import { BuildingProps } from "../../../../data/buildings/_types/props/BuildingProps";
import { isCostsPropsMatched } from "../_helpers/isCostsPropsMatched/isCostsPropsMatched";

export default function NextLevelDevelopmentButton({
  nextLevel,
  development,
  data,
  building,
}: {
  nextLevel: CostsAndProps;
  development?: BuildingDevelopment;
  data: BuildingDataDevelopment;
  building: Building;
}) {
  const gameState = useContext(GameContext);
  const disabled = useMemo(() => {
    let instanceProps: undefined | BuildingInstanceProps = undefined;
    let dataProps: undefined | BuildingProps[] = undefined;
    if (nextLevel.costs) {
      instanceProps = mergeBuildingInstanceProps(building);
    }
    if (nextLevel.props) {
      dataProps = mergeBuildingDataProps(building);
    }
    return !isCostsPropsMatched(nextLevel, dataProps, instanceProps);
  }, []);
  return (
    <button
      className="badge-m bg-light"
      onClick={() =>
        upgradeDevelopment(gameState, building.id, development!.type)
      }
      disabled={disabled}
    >
      Développer
    </button>
  );
}
