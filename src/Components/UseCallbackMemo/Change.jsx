import React from 'react'

const Change = ({  text, handleClick }) => {
    console.log(`Rendring Button ${text}`)
  return (
    <div>
        <button onClick={()=>handleClick()} className="">
            {text}
        </button>
    </div>
  )
}

export default React.memo(Change)
