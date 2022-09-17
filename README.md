# Rock Paper Scissors

## Design

Since one of the main requirements of the game is to be able to save the game I started with what I thought the game
state object would look like and the designed my components around that

```typescript
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
```

This will record all the relevant information in the state and make it easy to save the game state to persisted storage.

My next concern was around the component architecture. I decided to go with a one page layout component that would render
one of three sub-components based on the stage of the game. First would be the component responsible for signing up the
payers and determining whether they are human or computer. Next would be the actual play component, this could be reused
for both player, so it will cover stage 1 and 2. The final component would be
the results page and would also be responsible for executing the logic to determine the winner of the round whenever the
page was rendered as well as saving.

Since this was a small application passing state down through props was not a problem. If the application was larger I
might reach for a global state management library like Redux or make use of the Context API.

## Shortcomings 

I tried to follow the advice of time boxing to 3 hours. Sadly I was not able to implement the game saving feature. My 
intent was to just use Firebase's Firestore, which is just a document db, to store all games. This would allow to easily
save all played games as well as loading them and choosing which one to resume.

## Future Improvements
* Add the game saving feature via firebase
* Add a screen for rendering saved game and allow the user to choose which game to load
* In place of just firebase, a dedicated backend.
  * This could allow for online play where users would not have to share a computer
  * For a small app like this it would be overkill, but for a larger app it would be a good idea to offload any game solving or resolution logic to the dedicated backend.
* Currently the computer just randomly chooses a move. But it would be cool to implement a solver that learns the players favorite moves and gets better at the game.

