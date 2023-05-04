import { Heading } from "components/Heading";
import { usePageContext } from "context/page";

export const PostTitle = ({ level, textAlign, textColor }) => {
  const { title } = usePageContext();

  return (
    <Heading
      content={title}
      level={level}
      textAlign={textAlign}
      textColor={textColor}
    />
  );
};
