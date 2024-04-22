import { HStack, Text } from '@chakra-ui/react';
import { ColorModeSwitch } from './ColorModeSwitch';
import { SearchInput } from './SearchInput';

interface Props {
  onSearch: (searchText: string) => void;
}

export const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent="space-between" marginBottom={6}>
      {/* <Image src={logo} boxSize="3em" /> */}
      <Text
        fontSize="2xl"
        fontWeight="bold"
        cursor="pointer"
        onClick={() => {
          location.href = '/';
        }}
      >
        RAWG.io
      </Text>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};
