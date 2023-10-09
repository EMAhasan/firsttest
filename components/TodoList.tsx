
// TodoList.tsx
import React, { useState } from 'react';

import { gettodosAction } from '@/utiles/serveraction';
import TodoItem from './TodoItem';

export default async  function  TodoList ()  {
const {todos}=await gettodosAction()

/* const handleToggle = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index].done = !updatedTodos[index].done;
    setTodos(updatedTodos);
  }; */

  return (
    <div className="max-w-md ml-16 mt-10">
      <h1 className="text-2xl font-semibold mb-4">Todo List</h1>
      {(await todos)?.map((todo, index) => (
        <TodoItem
          key={index}
          id={todo.id}
          title={todo.title}
         date={todo.date}
          done={todo.done}
       
        />
      ))}
    </div>
  );
};


