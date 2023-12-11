import Row from "./components/Row";

export default function App() {
  const rows = Array.from({ length: 3 });
  const wordLength = 3;
  // const [currentRow, setCurrentRow] = useState(0);

  return (
    <div>
      {rows.map((_, index) => (
        <Row key={index} tiles={wordLength} />
      ))}
    </div>
  );
}
