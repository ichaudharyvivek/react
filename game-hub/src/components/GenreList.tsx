import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import { Genre, useGenres } from '../hooks/useGenres';
import { getCroppedImageURL } from '../services/imageURL';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

export const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, loading, error } = useGenres();

  if (error) return null;

  if (loading) return <Spinner />;

  return (
    <>
      <Heading as="h1" fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={1}>
            <HStack>
              <Image
                objectFit="cover"
                boxSize={'32px'}
                borderRadius={8}
                src={getCroppedImageURL(genre.image_background)}
              />
              <Button
                textAlign="left"
                whiteSpace="normal"
                variant="link"
                fontSize="lg"
                fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};
