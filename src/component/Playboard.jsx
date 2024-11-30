import React, { useState } from 'react';
import Square from './Square';

function Playboard() {
  const [state, setState] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);

  // Function to check for a winner
  const checkWinner = () => {
    const winnerPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let pattern of winnerPatterns) {
      const [a, b, c] = pattern;
      if (state[a] && state[a] === state[b] && state[a] === state[c]) {
        return state[a]; // Return the winner ('X' or 'O')
      }
    }
    return null; // No winner
  };

  const winner = checkWinner();

  // Check if the game is a draw
  const isDraw = !winner && state.every((square) => square !== null);

  // Function to handle square clicks
  const handleClicked = (index) => {
    if (state[index] !== null || winner || isDraw) return; // Prevent further actions if game is over or square is filled

    const newState = [...state];
    newState[index] = xTurn ? 'X' : 'O';
    setState(newState);
    setXTurn(!xTurn); // Switch turn
  };

  // Function to restart the game
  const handlePlayAgain = () => {
    setState(Array(9).fill(null)); // Reset the board
    setXTurn(true); // X starts again
  };

  return (
    <div className="mt-6 cursor-pointer">
      {winner ? (
        <>
          <div className="text-center text-4xl font-bold">
            {winner} Won The Game!
          </div>
          <div className="ml-[45%] mt-10 border-2 rounded bg-gray-400 text-white text-center w-28 p-2">
            <button onClick={handlePlayAgain}>Play Again</button>
          </div>
        </>
      ) : isDraw ? (
        <>
          <div className="text-center text-4xl font-bold">It's a Draw!</div>
          <div className="ml-[45%] mt-10 border-2 rounded bg-gray-400 text-white text-center w-28 p-2">
            <button onClick={handlePlayAgain}>Play Again</button>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-center text-xl font-semibold m-2">
            Player {xTurn ? 'X' : 'O'}'s Turn
          </h1>
          <div className="flex flex-col items-center">
            <div className="flex">
              <Square onClick={() => handleClicked(0)} value={state[0]} />
              <Square onClick={() => handleClicked(1)} value={state[1]} />
              <Square onClick={() => handleClicked(2)} value={state[2]} />
            </div>
            <div className="flex">
              <Square onClick={() => handleClicked(3)} value={state[3]} />
              <Square onClick={() => handleClicked(4)} value={state[4]} />
              <Square onClick={() => handleClicked(5)} value={state[5]} />
            </div>
            <div className="flex">
              <Square onClick={() => handleClicked(6)} value={state[6]} />
              <Square onClick={() => handleClicked(7)} value={state[7]} />
              <Square onClick={() => handleClicked(8)} value={state[8]} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Playboard;
