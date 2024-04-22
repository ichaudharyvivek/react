import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
  onSelectOrder: (ordering: string) => void;
  ordering: string;
}

export const SortSelector = ({ onSelectOrder, ordering }: Props) => {
  const sortOrders = [
    {
      value: '',
      label: 'Relevance',
    },
    {
      value: '-added',
      label: 'Date added',
    },
    {
      value: 'name',
      label: 'Name',
    },
    {
      value: '-released',
      label: 'Release data',
    },
    {
      value: '-metacritic',
      label: 'Popularity',
    },
    {
      value: '-rating',
      label: 'Average rating',
    },
  ];

  const currentSortOrder = sortOrders.find((order) => order.value === ordering);

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order By: {currentSortOrder?.label || 'Relevance'}
        </MenuButton>
        <MenuList>
          {sortOrders.map((order) => (
            <MenuItem
              key={order.value}
              value={order.value}
              onClick={() => onSelectOrder(order.value)}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};
