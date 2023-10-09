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

export default   function  Summary ()  {
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


  

  return (
    <div className="flex flex-row bg-slate-300  justify-center items-center max-w-md ml-16 mt-2">
      <h3 className=" text-green-900 font-bold text-2xl px-4 ">
      {data.filter((todo:Todo) => todo.done === true).length}
      </h3>
      <h3 className=" text-red-900 font-bold text-2xl px-4 ">
       {data.filter((todo:Todo) => todo.done === false).length}
      </h3>
    </div>
  );
};
