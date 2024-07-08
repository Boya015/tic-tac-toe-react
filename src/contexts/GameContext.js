import { createContext, useState } from 'react'

export const GameContext = createContext({}) 

export const GameContextProvider = (props) => {
  const [game, setGame] = useState({
    board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    player1: {
        choice: "x",
        name: "akhil"
    },
    player2: {
        choice: "o",
        name: "Harjot"
    },
    turn: "x"
  })

  const updateBoard = (index) => {
    let updatedBoard = [...game.board]; // Create a copy of the board array
    updatedBoard[index] = game.turn; // Update the desired index
    setGame({
      ...game,
      board: updatedBoard, // Update the board in the state
      turn: game.turn === "x" ? "o" : "x"
    });
  };
  
  return (
    <GameContext.Provider value={{ game, updatedBoard }}>
      {props.children}
    </GameContext.Provider>
  )
}