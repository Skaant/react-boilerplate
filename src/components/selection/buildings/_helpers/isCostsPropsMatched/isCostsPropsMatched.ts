import { CostsAndProps } from "../../../../../data/buildings/_types/BuildingData";
import { BuildingProps } from "../../../../../data/buildings/_types/props/BuildingProps";
import { BuildingInstanceProps } from "../mergeBuildingInstanceProps/_types/BuildingInstanceProps";

export function isCostsPropsMatched(
  { costs, props }: CostsAndProps,
  data?: BuildingProps[],
  instance?: BuildingInstanceProps
) {
  return (
    (costs
      ? instance &&
        costs.every(({ type, value }) => (instance[type] || 0) >= value)
      : true) &&
    (props
      ? data &&
        props
          ?.filter(({ value }) => value < 0)
          .every(({ type, value }) => {
            const _data = data.find(({ type: _type }) => _type === type);
            return _data ? _data.value + value >= 0 : false;
          })
      : true)
  );
}
