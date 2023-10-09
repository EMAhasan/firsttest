import { Todo } from '@prisma/client'
'use client'
import React from 'react'
import TodoItem from './TodoItem';

const callApi = async () => {
  try {
    const response = await fetch('/api/todo',{ next: { revalidate: 0 } });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data); // Handle the API response data here
  } catch (error) {
    console.error('Error calling API:', error);
  }
};
interface MyListProps {
  items: Todo[];
}
  function  TodoFetch ({ items }:MyListProps)  {
  
  
  return (
    <div className="max-w-md ml-16 mt-10">
       <h1 className="text-2xl font-semibold mb-4">Todo List</h1>
    
    {items.map((item) => (
       <TodoItem
       key={item.id}
       id={item.id}
       title={item.title}
      date={item.date}
       done={item.done}
    
     />
    ))}

  </div>
  )
}

export default  TodoFetch