import { Game } from "../hooks/useGames";
import { Card, HStack, Image } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import getCroppedImg from "../services/getCroppedImg";
import { ErrorBoundary } from "react-error-boundary";

interface Props {
  game: Game;
}
const GameCards = ({ game }: Props) => {
  return (
    <ErrorBoundary fallbackRender={() => <></>}>
      <Card.Root maxW="sm" overflow={"hidden"}>
        <Image src={getCroppedImg(game.background_image)} alt={game.name} />
        <Card.Body>
          <Card.Title>{game.name}</Card.Title>

          <HStack justifyContent={"space-between"}>
            <PlatformIconsList
              platforms={game.parent_platforms.map((p) => p.platform)}
            ></PlatformIconsList>

            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
        </Card.Body>
      </Card.Root>
    </ErrorBoundary>
  );
};

export default GameCards;
