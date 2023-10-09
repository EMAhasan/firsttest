'use client'
import { createAction, createtodoaction } from '@/utiles/serveraction';


import React, { useRef, useState } from 'react';



const TodoForm: React.FC = () => {
  
const myref=useRef<HTMLInputElement| null>(null)




async function formaction(data:FormData) {
    const title=data.get('title')
    const date=data.get('date') 
     console.log('date.  : ',date)
    
     if(!title || typeof title !='string') return
     await createtodoaction(title)

    if (myref.current) {
        myref.current.value = ''; // Correct usage of assignment within ref.current
    }
    
}

  return (
    <form action={formaction} className="flex items-center space-x-2 py-2 ml-8">
      <input
      ref={myref}
        type="text"
        placeholder="New todo"
        name='title'
       
        className="border rounded px-3 py-2 w-64"
      />
      <input
        type="date"
       name='date'
       
        className="border rounded px-3 py-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
