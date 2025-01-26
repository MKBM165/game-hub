import { Card, Skeleton } from "@chakra-ui/react";
import { SkeletonText } from "./ui/skeleton";
const GameCardSkeleton = () => {
  return (
    <Card.Root maxW="sm" overflow={"hidden"}>
      <Skeleton height={"200px"}></Skeleton>
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
