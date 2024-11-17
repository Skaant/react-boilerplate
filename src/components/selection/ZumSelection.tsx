import React from "react";
import { Zum } from "../../types/zums/Zum";

export default function ZumSelection({ zum }: { zum: Zum }) {
  return (
    <>
      <div className="d-flex">
        <div className="bg-dark-lightest text-light">
          <label className="text-dark-lighter">ZUM</label>
          <h2 className="text-funnel">{zum.name}</h2>
        </div>
      </div>
      <p className="mt-0 mb-0 p-1 bg-light">
        Déplacer avec z, q, s et d, ou les flèches directionnelles.
      </p>
    </>
  );
}
