import { SimpleGrid, Text } from '@chakra-ui/react';
import { useGames } from '../hooks/useGames';
import { GameCard } from './GameCard';
import { GameCardSkeletion } from './GameCardSkeletion';
import { GameCardContainer } from './GameCardContainer';
import { GameQuery } from '../App';

interface Props {
  gameQuery: GameQuery;
}

export const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, loading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (error) {
    return (
      <>
        {console.log(error)}
        {error && <Text padding={2}>😵😭😓😖 Oops: {error}</Text>}
      </>
    );
  }

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={3}
        padding={2}
      >
        {loading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeletion />
            </GameCardContainer>
          ))}

        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};
