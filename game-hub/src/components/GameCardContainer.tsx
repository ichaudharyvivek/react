import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const GameCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={'0.75em'} overflow={'hidden'}>
      {children}
    </Box>
  );
};
