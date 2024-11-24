import React from "react";
import { Zum } from "../../types/zums/Zum";

export default function ZumSelection({ zum: { name, state } }: { zum: Zum }) {
  return (
    <div className="overflow-auto pb-2">
      <label className="text-light-darker">Zum</label>
      <h2 className="text-funnel">{name}</h2>
      {state === "dry" ? (
        <>
          <div className="mt-2">
            <span className="badge-s bg-dark-lighter text-light">
              Statut : deshydraté
            </span>
          </div>
          <p>
            Le Zum dort pronfondément, attendant que suffisament de Wa réactive
            ses fonctions vitales.
          </p>
        </>
      ) : (
        <p>Déplacer avec z, q, s et d, ou les flèches directionnelles.</p>
      )}
    </div>
  );
}
