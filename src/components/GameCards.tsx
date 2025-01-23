import { Game } from "@/hooks/useGames";
import { Card, HStack, Image } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import getCroppedImg from "../services/getCroppedImg";

interface Props {
  game: Game;
}
const GameCards = ({ game }: Props) => {
  return (
    <Card.Root maxW="sm" overflow={"hidden"}>
      <Image src={getCroppedImg(game.background_image)} alt={game.name} />
      <Card.Body>
        <Card.Title>{game.name}</Card.Title>
        <Card.Description>
          <HStack justifyContent={"space-between"}>
            <PlatformIconsList
              platforms={game.parent_platforms.map((p) => p.platform)}
            ></PlatformIconsList>
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCards;
