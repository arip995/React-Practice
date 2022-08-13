import React, { useState} from 'react'

const Array = () => {
    const [initailValue, setinitailValue] = useState(0)


    const [array, setArray] = useState([])
    const changeArray = () => {
        console.log(initailValue)
        setArray([...array, initailValue])
        setinitailValue ((prev) => prev+100)
    }

  return (
    <div>
        <button onClick={changeArray} >
            {initailValue}
        </button>
    </div>
  )
}

export default Array