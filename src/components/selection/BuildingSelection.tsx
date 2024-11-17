import React, { useContext, useMemo, useState } from "react";
import { Building } from "../../types/buildings/Building";
import { BUILDINGS } from "../../data/buildings.data";
import { GameContext } from "../../GameContext";
import { Zum } from "../../types/zums/Zum";

export default function BuildingSelection({
  building,
}: {
  building: Building;
}) {
  const [game] = useContext(GameContext);
  const [tab, setTab] = useState<"home" | "residents" | "evolutions-modules">(
    "home"
  );
  const data = BUILDINGS[building.type];
  const residents = useMemo(
    () =>
      building.residents
        ?.map((zumId) => game?.zums[zumId])
        .filter((zum) => zum) as Zum[],
    [game]
  );
  return (
    <>
      <div className="d-flex">
        <div className="d-flex column p-1 bg-dark-lightest gap-1">
          <button onClick={() => setTab("home")}>Accueil</button>
          {data.residents && (
            <button onClick={() => setTab("residents")}>Résidents</button>
          )}
          <button onClick={() => setTab("evolutions-modules")}>
            Évolutions et modules
          </button>
        </div>
        <div className="p-1">
          <h2 className="text-funnel">{BUILDINGS[building.type].name}</h2>

          {tab === "home" && <div></div>}
          {tab === "residents" &&
            (building.residents ? (
              <p>{residents && residents.map(({ name }) => name).join(", ")}</p>
            ) : (
              <p>Pas encore de résidents</p>
            ))}
          {tab === "evolutions-modules" && (
            <>
              <div className="p-1">
                <h3>Évolutions</h3>
                <p>
                  {data.evolutions
                    ? data.evolutions.join(", ")
                    : "Pas d'évolutions"}
                </p>
              </div>
              <div className="p-1">
                <h3>Modules</h3>
                <p>
                  {data.modules ? data.modules.join(", ") : "Pas de modules"}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      <p className="mt-0 mb-0 p-1 bg-light">
        {BUILDINGS[building.type].description}
      </p>
    </>
  );
}
