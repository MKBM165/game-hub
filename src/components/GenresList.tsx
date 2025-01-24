import { HStack, Image, List, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImg from "../services/getCroppedImg";
import GenresListSkeleton from "./GenresListSkeleton";

const GenresList = () => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <GenresListSkeleton></GenresListSkeleton>;
  return (
    <List.Root variant={"plain"}>
      {data.map((genre) => (
        <List.Item paddingY={"5px"} key={genre.id}>
          <HStack>
            <Image
              src={getCroppedImg(genre.image_background)}
              borderRadius={8}
              boxSize={"32px"}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenresList;
