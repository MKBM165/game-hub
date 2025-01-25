import { Button, HStack, Image, List, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImg from "../services/getCroppedImg";
import GenresListSkeleton from "./GenresListSkeleton";
interface Props {
  onSelectedGenre: (genre: Genre) => void;
}
const GenresList = ({ onSelectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const skeletonList = new Array(20).fill("");
  if (error) return null;
  return (
    <List.Root variant={"plain"}>
      {isLoading &&
        skeletonList.map((_, i) => (
          <List.Item paddingY={"5px"} key={i}>
            <GenresListSkeleton />
          </List.Item>
        ))}
      {data.map((genre) => (
        <List.Item paddingY={"5px"} key={genre.id}>
          <Button onClick={() => onSelectedGenre(genre)} variant={"plain"}>
            <HStack>
              <Image
                src={getCroppedImg(genre.image_background)}
                borderRadius={8}
                boxSize={"32px"}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </Button>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenresList;
