'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const ButtonDelete = ({ id }) => {
    const router = useRouter();

    async function DeleteTask() {
       const res = await fetch(`/api/user?id=${id}`, { method: 'DELETE' });
      if(res.ok){
        router.refresh()
      }
    }

    return (
        <div className=''>
            <button onClick={DeleteTask} className='w-[120px] h-auto p-3 bg-yellow-500 rounded-md' id={id}>
                DELETE
            </button>
        </div>
    );
};

export default ButtonDelete;
