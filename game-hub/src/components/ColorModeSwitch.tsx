import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

export const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
        colorScheme="green"
      />
      <Text className="text-bold" whiteSpace="nowrap">
        {colorMode === 'dark' ? 'Dark' : 'Light'} Mode
      </Text>
    </HStack>
  );
};
