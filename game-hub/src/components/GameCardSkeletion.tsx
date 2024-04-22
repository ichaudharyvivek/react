import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

export const GameCardSkeletion = () => {
  return (
    <Card width={'100em'}>
      <Skeleton height={'16em'} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};
