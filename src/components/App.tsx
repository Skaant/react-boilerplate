import React, { useEffect, useState } from "react";
import { ConfigContext, ConfigContextData } from "../ConfigContext";
import { GameContext, GameContextData } from "../GameContext";
import Grid from "./grid/Grid";
import { UIContext, UIContextData } from "../UIContext";
import Selection from "./selection/Selection";
import { createGame } from "../helpers/createGame";
import { bindKeyboard } from "../helpers/bindKeyboard";

export default function App() {
  const configState = useState<ConfigContextData>({
    cellSize: 240,
  });
  const UIState = useState<UIContextData>({});
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
          <div>
            <h1 className="text-funnel text-center">Trikro</h1>
            <Grid />
            <Selection />
          </div>
        </GameContext.Provider>
      </UIContext.Provider>
    </ConfigContext.Provider>
  );
}
