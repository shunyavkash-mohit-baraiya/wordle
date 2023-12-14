import React from "react";
import Tile from "./Tile";

export default function Row({ tiles, typedWord = "", word = "" }) {
  tiles = Array.from({ length: tiles || 3 });

  return (
    <div className="flex">
      {tiles.map((_, index) => (
        <Tile
          key={index}
          status={
            word[index] === typedWord[index]
              ? "correct"
              : word.includes(typedWord[index])
              ? "wrong-place"
              : "incorrect"
          }
        >
          {typedWord[index]}
        </Tile>
      ))}
    </div>
  );
}
