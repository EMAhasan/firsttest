'use client'
import { createAction, createtodoaction } from '@/utiles/serveraction';
import { Todo } from '@/utiles/types';
import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query';
// TodoForm.tsx
import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';



const TodoFormQuery: React.FC = () => {
  
const myref=useRef<HTMLInputElement| null>(null)


const queryClient = useQueryClient();
const mutation = useMutation({
    mutationFn: ({  title ,testtext}: {  title: string ,testtext: string}) => {
      return fetch(`http://localhost:3000/api/todo`, {
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({title,testtext}),
      });
    },
    onSuccess() {
        queryClient.invalidateQueries({ queryKey: ["todoDate"] });
    },
  });

const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;
    const title = input.value;
    const input1 = form.elements[1] as HTMLInputElement;
    const testtext = input1.value;
    const input3 = form.elements[2] as HTMLInputElement;
    const datetext = input3.value;
console.log(title)
    mutation.mutate({'title':  title ,'testtext':testtext,});
    toast.success("The order status has been changed!")
  };

  return (
    <form onSubmit={(e) => handleUpdate(e)} className="flex items-center space-x-2 py-2 ml-8">
      <input
      ref={myref}
        type="text"
        placeholder="New todo"
        name='title'
       
        className="border rounded px-3 py-2 w-64"
      />
      <input
      
        type="text"
        placeholder="New test"
        name='testtext'
       
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

export default TodoFormQuery;
