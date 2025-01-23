import { Game } from "@/hooks/useGames";
import { Card, Image } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";

interface Props {
  game: Game;
}
const GameCards = ({ game }: Props) => {
  return (
    <Card.Root maxW="sm" overflow={"hidden"}>
      <Image minH={"sm"} src={game.background_image} alt={game.name} />
      <Card.Body>
        <Card.Title>{game.name}</Card.Title>
        <Card.Description>
          <PlatformIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconsList>
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCards;
