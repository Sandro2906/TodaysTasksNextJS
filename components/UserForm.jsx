'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import React from 'react'


const UserForm = () => {

    const [title,setTitle] = useState('')
    const [task,setTask] = useState('')
    const router = useRouter();

    
    async function handleSubmit(e){
      e.preventDefault();
     
        const res = await fetch("/api/user", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              title,task
            }),
          });

          router.push('/getting')
    }

  return (
    <div className='w-full min-h-screen flex justify-center items-center flex-col'>
    <h1 className="text-3xl text-white font-bold">Today's Tasks</h1>
      <p className='text-white mb-5'>Please fill in the form below</p>
    <form className='flex flex-col items-center' onSubmit={handleSubmit}>
        <input placeholder='Title' className='text-black w-[300px] h-auto p-2 border-2 border-yellow-500 rounded-md' type='text' value={title} onChange={e => setTitle(e.target.value)}/>
        <textarea rows={6} placeholder='Task' className='text-black w-[300px]  p-2 border-2 border-yellow-500 rounded-md my-2'  value={task} onChange={e => setTask(e.target.value)}/>
        <button className='text-white bg-yellow-500 w-[130px] h-auto p-3 rounded-md' type='submit'>POST</button>
    </form>
    </div>
  )
}

export default UserForm