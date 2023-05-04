import React from "react";
import { getTextAlign } from "utils/fonts";
import { relativeToAbsoluteUrls } from "utils/relativeToAbsoluteUrls";

export const Paragraph = ({ textAlign = "left", content, textColor }) => {
  return (
    <p
      className={`max-w-xs xs:max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-5xl mx-auto mt-3 mb-3 ${getTextAlign(
        textAlign
      )}`}
      style={{ color: textColor }}
      dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }}
    />
  );
};
