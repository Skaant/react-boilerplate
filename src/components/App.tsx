import React, { useState } from "react";
import { ConfigContext, ConfigContextData } from "../ConfigContext";
import { GameContext, GameContextData } from "../GameContext";
import Grid from "./grid/Grid";
import { createCells } from "../helpers/createCells";

export default function App() {
  const configState = useState<ConfigContextData>({
    cellSize: 128,
  });
  const gameState = useState<GameContextData>({
    cells: createCells(4, 4),
    zums: {},
  });
  return (
    <ConfigContext.Provider value={configState}>
      <GameContext.Provider value={gameState}>
        <div>
          <h1>KORE</h1>
          <Grid />
        </div>
      </GameContext.Provider>
    </ConfigContext.Provider>
  );
}
