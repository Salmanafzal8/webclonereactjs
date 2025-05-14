import React from 'react'
import { IoChatbubbleOutline } from "react-icons/io5";
import "./index.css"

const ChatButton = ({style}) => {
  return (
    <div className='btn'>
      <button style={style}><IoChatbubbleOutline style={{color :"#20BFED" , fontSize: "20px" } }/> LIVE CHAT</button>
    </div>
  )
}

export default ChatButton
