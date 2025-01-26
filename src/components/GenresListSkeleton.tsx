import { HStack, Skeleton } from "@chakra-ui/react";
import { SkeletonText } from "./ui/skeleton";

const GenresListSkeleton = () => {
  return (
    <HStack align="center" gap={4}>
      <Skeleton height={"32px"} width={"32px"} borderRadius={8} />
      <SkeletonText noOfLines={1} width="100px" />
    </HStack>
  );
};

export default GenresListSkeleton;
