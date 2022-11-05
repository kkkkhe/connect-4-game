import { useState } from 'react'

function App() {
  const [board, setBoard] = useState<any>(Array.from({length: 6},() => Array.from({length: 7}, () => 0)))
  const [step, setStep] = useState<boolean>(false)
  const color = ['red', 'yellow']
  function handleOnClick(indCol:number, indRow:number){
    const prevBoard:any = [...board.map((el:any) => [...el])]
    for(let i = board.length; i > 0; i--){
      if(typeof prevBoard[i - 1][indCol] == 'number') {
      prevBoard[i - 1][indCol] = color[+step]
      setStep(!step)
      setBoard(prevBoard)
      break
      }
    }
  }
  horizontalCheckForWinner(board)
  verticalCheckForWin(board)
  return (
    <div className="flex flex-col-reverse gap-2 h-screen w-full items-center justify-center bg-gray-100">
      <div className='bg-neutral-800 rounded-lg'>
        <div className='p-10 text-white'>
          {board.map((row:any, indRow:any) => {
        return (
          <div key={indRow} className='flex gap-2 pb-2'>
              {row.map((col:any, indCol:any) => {
                return (
                  <div key={indCol} onClick={() => handleOnClick(indCol, indRow)} 
                  className={`h-16 w-16 bg-gray-400 rounded-full flex items-center justify-center 
                  ${board[indRow][indCol] == 'red' && 'bg-red-600'} ${board[indRow][indCol] == 'yellow' && 'bg-yellow-300'}`}>
                  </div>
                )
              })}
          </div>
        )
      })}
        </div>
        
      </div>
      
    </div>
  )
}

function horizontalCheckForWinner(board:any){

  for(let i = 0; i < board.length; i++){
    let yellow = 0
    let red = 0
    for(let k = 0; k < 7; k++){
      if(board[i][k] === 'red'){
        red++
        if(red == 4) console.log('Red win')
        continue
      }
      red = 0
      if(board[i][k] === 'yellow'){
        yellow++
        if(yellow == 4) console.log('Yellow win')
        continue
      }
      yellow = 0
    }
  }
}

function verticalCheckForWin(board:any){
  let yellow = 0
  let red = 0
  for(let i = 0; i < 7; i++){
    for(let k = 0; k < 6; k++){
      if(board[k][i] === 'red'){
        red++
        if(red == 4) console.log('Red win')
        continue
      }
      red = 0
      if(board[k][i] === 'yellow'){
        yellow++
        if(yellow == 4) console.log('Yellow win')
        continue
      }
      yellow = 0
    }
  }
}

export default App
