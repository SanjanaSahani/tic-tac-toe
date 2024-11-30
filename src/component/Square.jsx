import React from 'react'

function Square(props) {
  return (
    <>
    <div onClick={props.onClick}
    className='h-20 w-16 flex justify-center content-center p-6 border-2 border-green-500'>
    <h1>{props.value}</h1>
    </div>
    </>
  )
}

export default Square