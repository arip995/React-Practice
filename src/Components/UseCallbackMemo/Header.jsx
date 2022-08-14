import React from 'react'

const Header = ({text}) => {
    console.log('Header')
  return (
    <div>
        <h1>{text}</h1>
    </div>
  )
}

export default React.memo(Header)