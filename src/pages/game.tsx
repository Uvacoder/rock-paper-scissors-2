import {Center} from '@mantine/core';
import {useState} from "react";
import {StartGameGrid} from "../components/startGameGrid/startGameGrid";
import {Play} from "../components/play/play";
import {Results} from "../components/results/results";

export interface player {
  type: 'human' | 'computer';
  name: string;
  choice: string;
}

export interface gameState {
  player1: player;
  player2: player;
  stage: number;
  rounds: number;
  p1Score: number;
  p2Score: number;
  draws: number;
}

const initState: gameState = {
  player1: {
    type: 'human',
    name: '',
    choice: ''
  },
  player2: {
    type: 'human',
    name: '',
    choice: ''
  },
  stage: 0,
  rounds: 0,
  p1Score: 0,
  p2Score: 0,
  draws: 0
}

export function Game() {
  const [gameState, setGame] = useState<gameState>(initState)
  const [stage, setStage] = useState<number>(0);

  const setName = (name: string, playerNumber: 1 | 2) => {
    if(playerNumber === 1) {
      setGame({...gameState, player1: {...gameState.player1, name: name}})
    } else {
      setGame({...gameState, player2: {...gameState.player2, name: name}})
    }
  }

  const newGame = () => {
    setGame(initState);
    setStage(0)
  }

  const gameOver = (player: number) => {
    console.log('game over');
    if(player === 1) {
      setGame({...gameState, p1Score: gameState.p1Score + 1, rounds: gameState.rounds + 1})
    } else if (player === 2) {
      setGame({...gameState, p2Score: gameState.p2Score + 1, rounds: gameState.rounds + 1})
    } else {
      setGame({...gameState, draws: gameState.draws + 1, rounds: gameState.rounds + 1})
    }
  }

  const setChoice = (playerNumber: number, choice: string) => {
    console.log('set choice');
    if(playerNumber === 1) {
      setGame({...gameState, player1: {...gameState.player1, choice: choice}})
    } else {
      setGame({...gameState, player2: {...gameState.player2, choice: choice}})
    }
  }

  const computerOrHuman = (player: player) : player => {
    return player.type === 'human' ? {...player, name: 'GLaDOS', type: 'computer'} : {...player, name: '', type: 'human'};
  }

  const enableComputer = (playerNumber: 1 | 2) => {
    if(playerNumber === 1) {
      setGame({...gameState, player1: computerOrHuman(gameState.player1)})
    } else {
      setGame({...gameState, player2: computerOrHuman(gameState.player2)})
    }
  }

  const validateAndMoveToNextStage = () => {
    console.log('validate and move to next stage');
    if(gameState.player1.name === '' || gameState.player2.name === '') {
      return;
    }
    setStage(stage + 1);
  }

  const resetGame = () => {
    setStage(0)
  }

  const anotherRound = () => {
    setStage(1)
  }

  const renderGameStage = () => {
    switch(stage) {
      case 0:
        return <StartGameGrid gameState={gameState} setName={setName} enableComputer={enableComputer} validateAndMoveToNextStage={validateAndMoveToNextStage} />
      case 1:
        return <Play player={gameState.player1} playerNumber={1} reset={resetGame} setChoice={setChoice} validateAndMoveToNextStage={validateAndMoveToNextStage}/>
      case 2:
        return <Play player={gameState.player2} playerNumber={2} reset={resetGame} setChoice={setChoice} validateAndMoveToNextStage={validateAndMoveToNextStage}/>
      case 3:
        return <Results gameOver={gameOver} gameState={gameState} newGame={newGame} anotherRound={anotherRound}/>
    }
  }

  return (
    <Center style={{ width: '100%', height: '25%' }}>
      {renderGameStage()}
    </Center>
  );
}