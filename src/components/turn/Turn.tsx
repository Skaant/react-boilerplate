import React, { useCallback, useContext, useMemo } from "react";
import { GameContext } from "../../contexts/GameContext";
import { passTurn } from "../../use-cases/passTurn/passTurn";

export default function Turn() {
  const [game, setGame] = useContext(GameContext);
  const disabled = useMemo(() => game?.tutorial === 0, [game?.tutorial]);
  const nextTurn = useCallback(
    () =>
      passTurn({
        gameState: [game, setGame],
      }),
    [game, setGame]
  );
  return (
    <div className="d-flex gap-1 align-center">
      <span className="text-funnel">Tour {game?.turn || 0}</span>
      <button
        className="badge-l bg-light text-dark lighter"
        disabled={disabled}
        onClick={nextTurn}
      >
        Tour suivant (n)
      </button>
    </div>
  );
}
