import React, { useEffect, useState } from "react";
import { ConfigContext, ConfigContextData } from "../contexts/ConfigContext";
import { GameContext, GameContextData } from "../contexts/GameContext";
import Grid from "./grid/Grid";
import { UIContext, UIContextData } from "../contexts/ui/UIContext";
import Selection from "./selection/Selection";
import { createGame } from "../helpers/createGame";
import { bindKeyboard } from "../helpers/bindKeyboard";

export default function App() {
  const configState = useState<ConfigContextData>({});
  const UIState = useState<UIContextData>({ zoom: 1, selectionHistory: [] });
  const gameState = useState<GameContextData>(createGame());
  useEffect(
    () =>
      bindKeyboard({
        UIState,
        gameState,
      }),
    [UIState[0]?.selection, gameState[0]]
  );
  return (
    <ConfigContext.Provider value={configState}>
      <UIContext.Provider value={UIState}>
        <GameContext.Provider value={gameState}>
          <h1 className="text-funnel pl-2">Trikro</h1>
          <div className="d-flex justify-center">
            <Grid />
            <Selection />
          </div>
          <div className="d-flex justify-center mt-2">
            <div className="d-flex gap-1 align-center">
              <span className="text-funnel">
                Tour {gameState[0]?.turn || 0}
              </span>
              <button className="badge-l bg-light text-dark lighter">
                Tour suivant
              </button>
            </div>
          </div>
        </GameContext.Provider>
      </UIContext.Provider>
    </ConfigContext.Provider>
  );
}
