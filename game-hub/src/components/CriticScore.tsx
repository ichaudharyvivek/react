import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}

export const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';
  return (
    <Badge
      fontSize={'1rem'}
      padding={1.5}
      borderRadius={'0.25em'}
      colorScheme={color}
    >
      {score}
    </Badge>
  );
};
