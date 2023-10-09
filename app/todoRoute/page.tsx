import TodoFetch from '@/components/TodoFetch'
import TodoForm from '@/components/TodoForm'
import TodoQuery from '@/components/TodoQuery'
import React from 'react'


async function getData() {
    const res = await fetch('http://localhost:3000/api/todo')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
  export default async function page  () {

const todos=await getData(); 

  return (
    <div>
        <TodoForm/>
        <TodoFetch items={todos}/>  
        
    </div>
  )
}

