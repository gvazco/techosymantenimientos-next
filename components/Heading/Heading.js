import React from "react";
import { getFontSizeForHeading, getTextAlign } from "utils/fonts";

export const Heading = ({ textAlign, content, level, textColor }) => {
  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    style: { color: textColor },
    className: `font-heading max-w-xs xs:max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-5xl mx-auto my-5 ${getFontSizeForHeading(
      level
    )} ${getTextAlign(textAlign)}`,
  });
  return tag;
};
