import {player} from "../../pages/game";
import {Card, Image, Text, Badge, Button, Group, Grid, Center} from '@mantine/core';
import {useEffect, useState} from "react";


interface playProps {
  player: player;
  playerNumber: 1 | 2;
  reset: () => void;
  setChoice: (playerNumber: number, choice: string) => void;
  validateAndMoveToNextStage: () => void;
}

export const Play = (props: playProps) => {
  const {player, playerNumber, reset, setChoice, validateAndMoveToNextStage} = props;

  const autoPlay = async () => {
    const choices = ['rock', 'paper', 'scissors'];
    for(let i = 0; i < choices.length * 2; i++) {
      const number = Math.floor(Math.random() * choices.length)
      const choice = choices[number];
      setChoice(playerNumber, choice);
      await new Promise(resolve => setTimeout(resolve, 250));
    }

  }

  useEffect(() => {
    console.log('is this running')
    const play = async () => {
      console.log('use effect running')
      if(player.type === 'computer') {
        await autoPlay();
        validateAndMoveToNextStage();
      }
    }
    play();
  }, [playerNumber])



  return (
    <Center>
      <Grid justify={'center'}>
        <Grid.Col span={12}>
          <Center>
            <Text size={'xl'}>{player.name + ' make your choice!'}</Text>
          </Center>
        </Grid.Col>
        <Grid.Col span={4}>
            <Center>
              <Button
                fullWidth
                color={player.choice === 'rock' ? 'green': 'blue'}
                onClick={() => setChoice(playerNumber, 'rock')}
              >
                Rock
              </Button>
            </Center>
        </Grid.Col>
        <Grid.Col span={4}>
          <Center>
            <Button
              fullWidth
              color={player.choice === 'paper' ? 'green': 'blue'}
              onClick={() => setChoice(playerNumber, 'paper')}
            >
              Paper
            </Button>
          </Center>
        </Grid.Col>
        <Grid.Col span={4}>
          <Center>
            <Button
              fullWidth
              color={player.choice === 'scissors' ? 'green': 'blue'}
              onClick={() => setChoice(playerNumber, 'scissors')}
            >
              Scissors
            </Button>
          </Center>
        </Grid.Col>
        <Grid.Col span={12}>
          <Center>
            <Group>
              <Button variant="light" color="blue" mt="md" radius="md" onClick={() => reset()}>
                Back
              </Button>
              <Button variant="light" color="blue" mt="md" radius="md" onClick={() => validateAndMoveToNextStage()}>
                Continue
              </Button>
            </Group>
          </Center>
        </Grid.Col>
      </Grid>
    </Center>
  )
}