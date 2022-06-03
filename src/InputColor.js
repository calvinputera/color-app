import colorNames from "colornames";

const InputColor = ({
  bgColor,
  setBgColor,
  textColor,
  setTextColor,
  setHexValue,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="color name..."
        value={bgColor}
        onChange={(e) => {
          setBgColor(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button type="button" onClick={() => setTextColor(!textColor)}>
        Change Text Color
      </button>
    </form>
  );
};

export default InputColor;
