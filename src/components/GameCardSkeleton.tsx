import { Card, Skeleton } from "@chakra-ui/react";
import { SkeletonText } from "../ui/skeleton";
const GameCardSkeleton = () => {
  return (
    <Card.Root maxW="sm" overflow={"hidden"}>
      <Skeleton width={"600px"} height={"250px"}></Skeleton>
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
