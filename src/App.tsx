import { useState } from 'react'

function App() {
  const [board, setBoard] = useState(Array.from({length: 6},() => Array.from({length: 7}, () => 0)))
  console.log(board)
  return (
    <div className="flex flex-col-reverse gap-2 h-screen w-full items-center justify-center bg-gray-100">
      <div className='bg-neutral-800 rounded-lg'>
        <div className='p-10 text-white'>
          {board.map((row, indRow) => {
        return (
          <div key={indRow} className='flex gap-2 pb-2'>
              {row.map((col, indCol) => {
                return (
                  <div key={indCol} className='h-16 w-16 bg bg-gray-400 rounded-full flex items-center justify-center'>
                    {indCol}, {indRow}
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
