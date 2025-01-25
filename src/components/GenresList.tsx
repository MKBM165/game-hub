import { HStack, Image, List, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImg from "../services/getCroppedImg";
import GenresListSkeleton from "./GenresListSkeleton";

const GenresList = () => {
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
