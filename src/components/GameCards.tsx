import { Game } from "@/hooks/useGames";
import { Card, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}
const GameCards = ({ game }: Props) => {
  return (
    <Card.Root maxW="sm" overflow={"hidden"}>
      <Image maxW={"md"} src={game.background_image} />
      <Card.Body>
        <Card.Title>{game.name}</Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCards;
