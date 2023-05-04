export const Columns = ({
  isStackedOnMobile,
  children,
  textColor,
  backgroundColor,
}) => {
  const textColorStyle = textColor ? { color: textColor } : {};
  const backgroundColorStyle = backgroundColor ? { backgroundColor } : {};
  return (
    <div
      className="my-10"
      style={{ ...textColorStyle, ...backgroundColorStyle }}
    >
      <div
        className={`max-w-xs xs:max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-5xl mx-auto ${
          isStackedOnMobile ? "block md:flex" : "flex"
        }`}
      >
        {children}
      </div>
    </div>
  );
};
