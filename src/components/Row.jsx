import React from "react";
import Tile from "./Tile";

export default function Row({ tiles, typedWord = "" }) {
  tiles = Array.from({ length: tiles || 3 });

  const status = ["correct", "incorrect", "wrong-place"];
  return (
    <div className="flex">
      {tiles.map((_, index) => (
        <Tile
          key={index}
          status={status[Math.floor(Math.random() * status.length)]}
        >
          {typedWord[index]}
        </Tile>
      ))}
    </div>
  );
}
