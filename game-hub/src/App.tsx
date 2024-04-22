import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import { Navbar } from './components/Navbar';
import { GameGrid } from './components/GameGrid';
import { GenreList } from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import { PlatformSelector } from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import { SortSelector } from './components/SortSelector';
import { GameHeading } from './components/GameHeading';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  ordering: string;
  searchText: string;
}

export const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        padding={2}
        templateColumns={{
          base: '1fr',
          lg: '13em 1fr',
        }}
      >
        <GridItem area="nav" padding={2}>
          <Navbar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>

        <Show above="lg">
          <GridItem area="aside" padding={2}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>

        <GridItem area="main">
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery} />
            <HStack spacing={2} marginBottom={5}>
              <SortSelector
                ordering={gameQuery.ordering}
                onSelectOrder={(ordering) =>
                  setGameQuery({ ...gameQuery, ordering })
                }
              />
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
            </HStack>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
};
