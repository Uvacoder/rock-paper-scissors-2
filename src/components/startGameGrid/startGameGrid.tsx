import {Button, Center, Container, Grid, Group} from "@mantine/core";
import {PlayerNameInput} from "../playerNameInput/playerNameInput";
import {gameState} from "../../pages/game";

interface startGameGridProps {
  gameState: gameState;
  setName: (name: string, playerNumber: 1 | 2) => void;
  enableComputer: (playerNumber: 1 | 2) => void;
  validateAndMoveToNextStage: () => void;
}

export const StartGameGrid = (props: startGameGridProps) => {
  const {gameState, setName, enableComputer, validateAndMoveToNextStage} = props;

  return (
    <Grid>
      <Grid.Col span={8}>
        <Container>
          <PlayerNameInput
            title={'Player one'}
            disabled={gameState.player1.type === 'computer'}
            value={gameState.player1.name}
            playerNumber={1}
            setName={setName}
          />
        </Container>
      </Grid.Col>
      <Grid.Col span={4}>
        <Center sx={{height: '100%'}} inline>
          <Group spacing="xs">
            <Button variant="outline" onClick={() => enableComputer(1)}>Computer</Button>
          </Group>
        </Center>
      </Grid.Col>
      <Grid.Col span={8}>
        <Container>
          <PlayerNameInput
            title={'Player two'}
            disabled={gameState.player2.type === 'computer'}
            value={gameState.player2.name}
            playerNumber={2}
            setName={setName}
          />
        </Container>
      </Grid.Col>
      <Grid.Col span={4}>
        <Center sx={{height: '100%'}} inline>
          <Group spacing="xs">
            <Button variant="outline" onClick={() => enableComputer(2)}>Computer</Button>
          </Group>
        </Center>
      </Grid.Col>
      <Grid.Col span={12}>
        <Center sx={{height: '100%'}}>
          <Group spacing="xs">
            <Button variant="outline" onClick={() => validateAndMoveToNextStage()}>Play</Button>
          </Group>
        </Center>
      </Grid.Col>
    </Grid>
  )
}