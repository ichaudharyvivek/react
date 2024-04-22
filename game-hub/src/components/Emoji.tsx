import { Box } from '@chakra-ui/react';

interface Props {
  rating: number;
}

export const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: { src: string; fontSize: string } } = {
    3: { src: '😐', fontSize: '25px' },
    4: { src: '👍', fontSize: '25px' },
    5: { src: '🎯', fontSize: '35px' },
  };

  return (
    <Box fontSize={emojiMap[rating].fontSize} marginTop={2}>
      {emojiMap[rating].src}
    </Box>
  );
};
