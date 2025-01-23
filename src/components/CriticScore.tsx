import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const color = score > 90 ? "teal" : score > 80 ? "yellow" : "red";
  return (
    <Badge fontSize={"14px"} paddingX={2} colorPalette={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
