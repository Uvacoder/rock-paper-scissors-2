import { Input } from '@mantine/core';
import { IconAt } from '@tabler/icons';

interface nameProps {
  title: string,
  playerNumber: 1 | 2,
  disabled: boolean,
  value: string,
  setName: (name: string, playerNumber: 1 | 2) => void;
}

export function PlayerNameInput(props: nameProps ) {
  const {title, disabled, value, setName, playerNumber} = props;

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value, playerNumber);
  }

  return (
    <Input
      disabled={disabled}
      icon={<IconAt />}
      placeholder={title}
      value={value}
      radius="md"
      onChange={handleNameChange}
      size="lg"
    />
  );
}