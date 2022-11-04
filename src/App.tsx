import { useState } from 'react'

function App() {
  let i = 0
  const [board, setBoard] = useState<any>(Array.from({length: 6},() => Array.from({length: 7}, () => i++)))
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

export default App
