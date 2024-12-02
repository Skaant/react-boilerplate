import React, { useCallback, useContext, useMemo } from "react";
import { BuildingProps } from "../../../data/buildings/_types/props/BuildingProps";
import { BuildingInstanceProps } from "./_helpers/mergeBuildingInstanceProps/_types/BuildingInstanceProps";
import ProgressBar from "../ProgressBar";
import { UIContext } from "../../../contexts/ui/UIContext";
import { GameContext } from "../../../contexts/GameContext";
import { setSelection } from "../../../contexts/ui/helpers/setSelection";
import { Zum } from "../../../types/zums/Zum";
import { BuildingCosts } from "../../../data/buildings/_types/costs/BuildingCosts";

export default function BuildingSelectionProps({
  props,
  costs,
  object,
  mode = "light",
}: {
  props: BuildingProps[];
  costs?: BuildingCosts[];
  object?: BuildingInstanceProps;
  mode?: "light" | "dark";
}) {
  const UIState = useContext(UIContext);
  const [game] = useContext(GameContext);
  const index = useMemo(() => {
    return props.reduce(
      (index, prop) => ({
        ...index,
        [prop.type]: prop,
      }),
      {} as {
        [type in BuildingProps["type"]]?: BuildingProps;
      }
    );
  }, [props]);
  const costsIndex = useMemo(() => {
    return costs?.reduce(
      (index, cost) => ({
        ...index,
        [cost.type]: cost,
      }),
      {} as {
        [type in BuildingCosts["type"]]?: BuildingCosts;
      }
    );
  }, [costs]);
  const zums = useMemo(
    () => (object?.residents || []).map((id) => game!.zums[id]),
    [object?.residents, game?.zums]
  );
  const waValue = useMemo(() => {
    if (!object?.wa && !costsIndex?.["wa"]?.value) return undefined;
    const wa = object?.wa || 0;
    const waCost = costsIndex?.["wa"]?.value || 0;
    return wa - waCost;
  }, [object?.wa, costsIndex?.["wa"]?.value]);
  const jingValue = useMemo(() => {
    if (!object?.jing && !costsIndex?.["jing"]?.value) return undefined;
    const jing = object?.jing || 0;
    const jingCost = costsIndex?.["jing"]?.value || 0;
    return jing - jingCost;
  }, [object?.jing, costsIndex?.["jing"]?.value]);
  const clickZum = useCallback(
    (id: Zum["id"]) =>
      zums &&
      setSelection(UIState, {
        type: "zum",
        id,
      }),
    [zums, UIState]
  );
  return (
    <>
      {(index["zums-slots"] || index["zums-prod"] || object?.residents) && (
        <ProgressBar
          label="Zums"
          zums={zums}
          clickZum={clickZum}
          value={zums.length}
          max={index["zums-slots"]?.value}
          prod={index["zums-prod"]?.value}
          mode={mode}
        />
      )}
      {(index["wa-max"] || index["wa-prod"] || waValue) && (
        <ProgressBar
          label="Wa"
          value={waValue}
          max={index["wa-max"]?.value}
          prod={index["wa-prod"]?.value}
          mode={mode}
        />
      )}
      {(index["jing-max"] || index["jing-prod"] || jingValue) && (
        <ProgressBar
          label="Jing"
          value={jingValue}
          max={index["jing-max"]?.value}
          prod={index["jing-prod"]?.value}
          mode={mode}
        />
      )}
      {(index["data-max"] || index["data-prod"] || object?.data) && (
        <ProgressBar
          label="Data"
          value={object?.data}
          max={index["data-max"]?.value}
          prod={index["data-prod"]?.value}
          mode={mode}
        />
      )}
    </>
  );
}
