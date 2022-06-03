const BoxColor = ({ bgColor, textColor, hexValue }) => {
  return (
    <section
      className="square"
      style={{
        backgroundColor: bgColor,
        color: textColor ? "#242424" : "#fdfdfd",
      }}
    >
      <p>{bgColor ? bgColor : "Empty Color"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
};

export default BoxColor;
