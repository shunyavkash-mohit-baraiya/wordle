import { useEffect, useState } from "react";
import Row from "./components/Row";

export default function App() {
  const rows = Array.from({ length: 3 });
  const wordLength = 3;
  const maxTry = 3;
  // const word = "try";
  const [typedWord, setTypedWord] = useState("");
  const [currentTry, setCurrentTry] = useState(0);
  const [wordHistory, setWordHistory] = useState([]);
  // const [currentRow, setCurrentRow] = useState(0);
  useEffect(() => {
    const keyUpHandler = (e) => {
      let key = e.key.toLowerCase();
      const regex = /^[A-z]$/;

      if (currentTry === maxTry || !regex.test(key)) {
        return;
      }
      // if (typedWord.length + 1 !== wordLength) {
      setTypedWord((prevWord) => {
        if (prevWord.length === wordLength) {
          return key;
        }
        return prevWord + key;
      });
      // } else {
      //   setTypedWord("");
      //
      // }
    };
    window.addEventListener("keyup", keyUpHandler);
    return () => {
      window.removeEventListener("keyup", keyUpHandler);
    };
  }, [typedWord.length, setCurrentTry, currentTry]);

  console.log(currentTry);
  // set current word in history
  useEffect(() => {
    if (typedWord.length === wordLength) {
      setCurrentTry((prevTry) => prevTry + 1);
      setTypedWord("");
      setWordHistory((prev) => [...prev, typedWord]);
    }
  }, [typedWord]);
  console.log(currentTry);
  return (
    <div>
      {rows.map((_, index) => (
        <Row
          typedWord={currentTry === index ? typedWord : wordHistory[index]}
          key={index}
          tiles={wordLength}
        />
      ))}
    </div>
  );
}
