import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import useSendMessage from '../../context/useSendMessage';


function Messagesend() {
   const [message,setMessage]=useState('');
  const {loading,sendMessage}=useSendMessage();
  const handleSubmit=async (e) =>{
   e.preventDefault(); 
    
   await sendMessage(message);
   
      setMessage("");
  } 
  return (
   <form onSubmit={handleSubmit}>
     <div className=' flex space-x-3 bg-gray-800 h-[8vh] text-white'>
        <div className='w-[70%] mx-4'>
            <input type="text" placeholder="Message" className="border border-gray-700 rounded-xl mt-1.5 px-4 py-3 w-full outline-none"
            value={message} 
            onChange={(e)=>setMessage(e.target.value)}/>
        </div>
        <button>
           <IoSend className='text-3xl mb-2' />
        </button>
    </div>
   </form>
  )
}

export default Messagesend