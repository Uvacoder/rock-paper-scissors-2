import {Button, Center, Grid, Group} from "@mantine/core";
import { gameState } from "../../pages/game";
import {useEffect, useState} from "react";

interface resultsProps {
  gameState: gameState;
  gameOver: (player: number) => void;
  newGame: () => void;
  anotherRound: () => void;
}

export const Results = (props: resultsProps) => {
  const [winner, setWinner] = useState<1 | 2 | 0>(0);

const {gameState, gameOver, newGame, anotherRound} = props;

const determineWinner = (): 0 | 1 | 2 => {
  if(gameState.player1.choice === gameState.player2.choice) {
    return 0;
  } else if(gameState.player1.choice === 'rock' && gameState.player2.choice !== 'scissors') {
    return 2;
  } else if(gameState.player1.choice === 'paper' && gameState.player2.choice !== 'rock') {
    return 2;
  } else if(gameState.player1.choice === 'scissors' && gameState.player2.choice !== 'paper') {
    return 2;
  } else {
    return 1;
  }
}

const winnerText = (): string => {
  if(winner === 0) {
    return 'Draw!';
  } else if(winner === 1) {
    return gameState.player1.name + ' wins!';
  } else {
    return gameState.player2.name + ' wins!';
  }
}

const saveGame = () => {
  console.log('save game');
}

useEffect(() => {
  const winner = determineWinner();
  gameOver(winner);
  setWinner(winner);
}, [])

  return (
    <Grid>
      <Grid.Col span={12}>
        <Center>
          <h1>{winnerText()}</h1>
        </Center>
      </Grid.Col>
      <Grid.Col span={4}>
        <Center>
          {gameState.player1.name + ' score'}
        </Center>
      </Grid.Col>
      <Grid.Col span={4}>
        <Center>
          {'Draws'}
        </Center>
      </Grid.Col>
      <Grid.Col span={4}>
        <Center>
          {gameState.player2.name + ' score'}
        </Center>
      </Grid.Col>
      <Grid.Col span={4}>
        <Center>
          {gameState.p1Score}
        </Center>
      </Grid.Col>
      <Grid.Col span={4}>
        <Center>
          {gameState.draws}
        </Center>
      </Grid.Col>
      <Grid.Col span={4}>
        <Center>
          {gameState.p2Score}
        </Center>
      </Grid.Col>
      <Grid.Col span={12}>
        <Center>
          <Group>
            <Button variant="light" color="blue" mt="md" radius="md" onClick={() => newGame()}>
              New Game
            </Button>
            <Button variant="light" color="blue" mt="md" radius="md" onClick={() => anotherRound()}>
              Another Round
            </Button>
            <Button variant="light" color="blue" mt="md" radius="md" onClick={() => saveGame()}>
              Save Game
            </Button>
          </Group>
        </Center>
      </Grid.Col>
    </Grid>
  )
}