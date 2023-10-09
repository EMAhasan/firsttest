'use client'
// TodoList.tsx
import React, { useState } from 'react';
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from '@tanstack/react-query'
import { gettodosAction } from '@/utiles/serveraction';
import TodoItem from './TodoItem';
import { Todo } from '@/utiles/types';

export default   function  TodoQuery ()  {
//const {todos}=await gettodosAction()



    const { isLoading, error, data } = useQuery({
      queryKey: ['todoDate'],
      queryFn: () =>
        fetch('http://localhost:3000/api/todo').then(
          (res) => res.json(),
        ),
    })
  
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error
/* const handleToggle = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index].done = !updatedTodos[index].done;
    setTodos(updatedTodos);
  }; */

  return (
    <div className="max-w-md ml-16 mt-10">
      <h1 className="text-2xl font-semibold mb-4">Todo List</h1>
      {( data)?.map((todo:Todo, index:number) => (
        <TodoItem
          key={index}
          id={todo.id}
          title={todo.title}
         date={todo.date}
          done={true}
       
        />
      ))}
    </div>
  );
};
