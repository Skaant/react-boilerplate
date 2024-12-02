import { mergeDataProps } from "../../../components/selection/buildings/_helpers/mergeBuildingDataProps/mergeDataProps";
import { BUILDINGS } from "../../../data/buildings/buildings.data";
import { DEVELOPMENTS } from "../../../data/buildings/developments/developments.data";
import { MODULES } from "../../../data/buildings/modules/modules.data";
import { Building } from "../../../types/buildings/Building";
import { getProductionProps } from "./getProductionProps";
import { ProdSource } from "./_types/ProdSource";

export function getHolisticBuildingProdProps(building: Building): ProdSource[] {
  const data =
    BUILDINGS[
      `${building.type}${
        building.step ? `-${building.step}` : ""
      }` as keyof typeof BUILDINGS
    ];
  return [
    ...(!building.state && data.props
      ? getProductionProps(data.props).map(
          (prop) =>
            ({
              type: "building",
              buildingId: building.id,
              prop,
            } as ProdSource)
        )
      : []),
    ...(building.developments
      ? Object.values(building.developments)
          .filter(({ type }) => DEVELOPMENTS[type].props)
          .map(({ type, count }) => {
            const props = getProductionProps(DEVELOPMENTS[type].props!);
            if (props.length)
              return props.length
                ? mergeDataProps(
                    [...Array(count)]
                      .map(() => DEVELOPMENTS[type].props!)
                      .flat()
                  ).map(
                    (prop) =>
                      ({
                        type: "development",
                        buildingId: building.id,
                        developmentType: type,
                        prop,
                      } as ProdSource)
                  )
                : [];
            return [];
          })
          .flat()
      : []),
    ...(building.modules
      ? building.modules
          .filter(({ type, state }) => !state && MODULES[type].props)
          .map(({ id, type }) =>
            getProductionProps(MODULES[type].props!).map(
              (prop) =>
                ({
                  type: "module",
                  buildingId: building.id,
                  moduleId: id,
                  prop,
                } as ProdSource)
            )
          )
          .flat()
      : []),
  ];
}
