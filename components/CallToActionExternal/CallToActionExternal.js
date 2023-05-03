import React from "react";

export const CallToActionExternal = ({
  align = "left",
  buttonLabel,
  destination,
}) => {
  const alignMap = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };
  return (
    <div className={alignMap[align]}>
      <a href={destination} className="btn">
        {buttonLabel}
      </a>
    </div>
  );
};
