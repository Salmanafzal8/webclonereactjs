import React from 'react'
import "./index.css"

const ContainedButton = ({text,style}) => {
  return (
    <div className='btn2' >
      <button style={style}>{text}</button>
    </div>
  )
}

export default ContainedButton
