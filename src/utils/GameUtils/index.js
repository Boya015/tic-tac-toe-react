const checkForSequence = (option1, option2, option3) => {
    return option1 === option2 && option2 === option3
} 

export const checkForWinner = (option1, option2, option3) => {
    // 0 1 2
    // 3 4 5
    // 6 7 8

    for(let i; i<9; 1+=3) {
      if(checkForSequence(board[1], board[i+1], board[i+2])) {
        console.log("ROW Winner");
        return true
      }
    }

    for(let i; i<9; 1+=3) {
        if(checkForSequence(board[1], board[i+1], board[i+2])) {
          console.log("ROW Winner");
          return true
        }
      }

      for(let i=0; i<3; i+=1) {
        if(checkForSequence(board[1], board[i+3], board[i+6])) {
          console.log("Column Winner");
          return true
        }
      }

    //diagonias
    if(board[0] === board[4] && board[4] === board[8]) {
       console.log("Diagonal winner")
        return true
    }

    if(board[2] === board[4] && board[4] === board[6]) {
        console.log("We have a winner")
         return true
     }
}