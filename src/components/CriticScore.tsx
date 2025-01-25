import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const color = score > 89 ? "teal" : score > 79 ? "yellow" : "red";
  return (
    <Badge fontSize={"14px"} paddingX={2} colorPalette={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
