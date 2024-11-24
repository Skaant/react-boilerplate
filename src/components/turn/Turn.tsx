import React, { useCallback, useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import { landSeedVessel } from "../../use-cases/landSeedVessel";

export default function Turn() {
  const [game, setGame] = useContext(GameContext);
  const nextTurn = useCallback(() => {
    setGame({
      ...game!,
      turn: game!.turn + 1,
      tutorial: game!.tutorial === 1 ? 2 : game!.tutorial,
    });
    game!.tutorial === 1 && landSeedVessel({ gameContext: [game, setGame] });
  }, [game]);
  return (
    <div className="d-flex gap-1 align-center">
      <span className="text-funnel">Tour {game?.turn || 0}</span>
      <button className="badge-l bg-light text-dark lighter" onClick={nextTurn}>
        Tour suivant
      </button>
    </div>
  );
}
