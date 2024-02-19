import { useState } from "react";
import Dropdown from "./components/Dropdown";

function App() {
  // External dropdown state and handle selection function
  const [selection, setSelecion] = useState("");

  function handleSelection(option) {
    setSelecion(option);
  }

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  console.log("Select option: ", selection)

  return (
    <>
      <Dropdown
        options={options}
        onChange={handleSelection}
        value={selection}
      />
    </>
  );
}

export default App;
