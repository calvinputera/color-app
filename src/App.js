import { useState } from "react";
import BoxColor from "./BoxColor";
import InputColor from "./InputColor";

function App() {
  const [bgColor, setBgColor] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [textColor, setTextColor] = useState(false);

  return (
    <div className="App">
      <BoxColor bgColor={bgColor} textColor={textColor} hexValue={hexValue} />
      <InputColor
        bgColor={bgColor}
        setBgColor={setBgColor}
        textColor={textColor}
        setTextColor={setTextColor}
        setHexValue={setHexValue}
      />
    </div>
  );
}

export default App;
