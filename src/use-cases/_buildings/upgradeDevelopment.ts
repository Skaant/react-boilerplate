import { GameContextData } from "../../contexts/GameContext";
import { State } from "../../types/_helpers/State";
import { Building, BuildingDevelopment } from "../../types/buildings/Building";

export function upgradeDevelopment(
  [game, setGame]: State<GameContextData>,
  buildingId: Building["id"],
  developmentType: BuildingDevelopment["type"]
) {
  setGame({
    ...game!,
    buildings: {
      ...game!.buildings,
      [buildingId]: {
        ...game!.buildings[buildingId],
        developments: {
          ...game!.buildings[buildingId].developments!,
          [developmentType]: {
            ...game!.buildings[buildingId].developments![developmentType],
            count:
              game!.buildings[buildingId].developments![developmentType].count +
              1,
          },
        },
      } as Building,
    },
  });
}
