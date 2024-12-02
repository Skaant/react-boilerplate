import React, { useContext, useMemo } from "react";
import {
  Building,
  BuildingDevelopment,
} from "../../../../types/buildings/Building";
import {
  BuildingDataDevelopment,
  CostsAndProps,
} from "../../../../data/buildings/_types/BuildingData";
import ProgressBar from "../../ProgressBar";
import BuildingSelectionProps from "../BuildingSelectionProps";
import { mergeDataProps } from "../_helpers/mergeBuildingDataProps/mergeDataProps";
import Collapsible from "../../Collapsible";
import { GameContext } from "../../../../contexts/GameContext";
import NextLevelDevelopmentButton from "./NextLevelDevelopmentButton";

export default function BuildingSelectionDevelopement({
  building,
  development,
  data,
  disabledNext,
}: {
  building: Building;
  development?: BuildingDevelopment;
  data: BuildingDataDevelopment;
  disabledNext?: boolean;
}) {
  const gameState = useContext(GameContext);
  const props = useMemo(
    () =>
      mergeDataProps(
        [...Array(development?.count || 1)]
          .map((_, index) => {
            if (data.initial && index === 0) return data.initial.props || [];
            if (data.final && index === data.count - 1)
              return data.final.props || [];
            return data.props || [];
          })
          .flat()
      ),
    [development?.count]
  );
  const nextLevel = useMemo((): undefined | CostsAndProps => {
    const count = development?.count || 0;
    if (count === data.count) return undefined;
    return {
      costs:
        (data.initial && count === 0
          ? data.initial.costs
          : data.final && count === data.count - 1 && data.final.costs) ||
        data.costs,
      props:
        (data.initial && count === 0
          ? data.initial.props
          : data.final && count === data.count - 1 && data.final.props) ||
        data.props,
    };
  }, [development?.count]);
  return (
    <div className="p-2 bg-light text-dark">
      <div>
        <h3 className="mt-0 mb-2">{data.name}</h3>
        <ProgressBar
          value={development?.count || 0}
          max={data.count}
          mode="dark"
        />
        <p>{data.description}</p>
        <BuildingSelectionProps props={props} mode="dark" />
        {nextLevel && (
          <div className="p-2 bg-light-darker">
            <Collapsible
              header={<h4>Prochain niveau</h4>}
              content={
                <>
                  <BuildingSelectionProps
                    props={nextLevel.props || []}
                    costs={nextLevel.costs}
                  />
                  {disabledNext ? (
                    <button></button>
                  ) : (
                    <NextLevelDevelopmentButton
                      nextLevel={nextLevel}
                      development={development}
                      data={data}
                      building={building}
                    />
                  )}
                </>
              }
              mt={false}
            />
          </div>
        )}
      </div>
    </div>
  );
}
