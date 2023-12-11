import React, { useState } from "react";
import Tile from "./Tile";

export default function Row({ tiles }) {
  tiles = Array.from({ length: tiles || 3 });
  const [currentPosition, setCurrentPosition] = useState(0);

  return (
    <div className="flex">
      {tiles.map((_, index) => (
        <Tile
          key={index}
          position={index}
          currentPosition={currentPosition}
          setCurrentPosition={setCurrentPosition}
        />
      ))}
    </div>
  );
}
