import React, { useEffect, useState } from "react";

export default function Tile({
  setCurrentPosition,
  position,
  currentPosition,
}) {
  const [tile, setTile] = useState({ letter: "", status: "" });
  useEffect(() => {
    const keyUpHandler = (event) => {
      const key = event.key.toLowerCase();
      const checkForLetter = /^[A-z]$/;
      if (!checkForLetter.test(key)) {
        return;
      }
      setTile({
        letter: key,
      });
    };
    window.addEventListener("keyup", keyUpHandler);
    return () => {
      window.removeEventListener("keyup", keyUpHandler);
    };
  }, [position, currentPosition, setCurrentPosition]);

  return <div className="tile">{tile.letter}</div>;
}
