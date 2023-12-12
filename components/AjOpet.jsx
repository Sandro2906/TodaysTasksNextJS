'use client'
import React, { useEffect, useState } from 'react'
import ButtonDelete from './ButtonDelete'
import { useRouter } from 'next/navigation'

const getData = async()=>{
    const res = await fetch('/api/user',{
        cache: 'no-store',
    })
    const data = await res.json()
    return data.userss
}

const AjOpet = () => {
    
    const router = useRouter()
    const [user,setUser] = useState([])
    useEffect(()=>{
        const funkcijaFetch = async ()=>{
            const podaci = await getData();
            setUser(podaci);
        }
        funkcijaFetch();
     
    },[])

  return (
    <div className='w-full min-h-screen bg-purple-950 flex flex-col items-center p-7'>
        {
            user.map(({title,task,_id})=>(
                <div key={_id} className='w-[500px] h-auto p-3 border-4 text-white border-purple-700 rounded-lg mb-7'>
                <h1 className='text-2xl underline pb-3'>{title}</h1>
                <h2 className='w-full h-auto pb-3'>{task}</h2>
                <div className='w-full flex justify-end'>
                <ButtonDelete  id={_id}/>
                </div>
                </div>
            ))
        }
    
    </div>
  )
}

export default AjOpet