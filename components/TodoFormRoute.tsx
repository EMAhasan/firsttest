'use client'
import { revalidatePath } from 'next/cache';
import { useRouter } from 'next/navigation';
import { title } from 'process';
import React from 'react'

const TodoFormRoute = () => {

    const router = useRouter();

const handleAdd = async (event: React.FormEvent<HTMLFormElement>) => {
   //event.preventDefault();
  
      try {
        const res = await fetch("http://localhost:3000/api/todo", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: 'title',
            
          }),
        });
        const data =await res.json()
        router.push('/')
      } catch (err) {
        console.log(err);
      }
  
  };


  return (
    <form onSubmit={ handleAdd} className="flex items-center space-x-2 py-2 ml-8">
      <input
     
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
  )
}

export default TodoFormRoute

