'use client'
import { type } from 'os'
import React from 'react'
import {useForm,SubmitHandler} from 'react-hook-form'
import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query';
enum GenderEnum{
  num1='a',
  num2='b',
  num3='c',
  num4='d',
  num5='e',
}
type Inpits={
  firstName:string
  lastName:string
  gender: GenderEnum
  hobbies:string[]
  city:string
}
const FormPersonal = () => {
  //const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data1: Inpits) => {
      return fetch(`http://localhost:3000/api/test`, {
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data1),
      });
    },
    onSuccess() {
       console.log('successfully ')
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    formState:{errors}
  }=useForm<Inpits>()
  const onsubmit11:SubmitHandler<Inpits>=(data)=>{
    console.log(data)
    mutation.mutate(data)
  return true}
  return (
    <div className='flex flex-col w-1/3 justify-center items-center p-5 container bg-yellow-200 mx-auto my-5 rounded-lg'>
      <p className='uppercase text-blue-700'> Personal data</p>
<form className='flex flex-col w-full' onSubmit={handleSubmit(onsubmit11)}>
 
  <input {...register('firstName',{required:true})}/>
  {errors.firstName&&<span className='text-red-700'>this field is required </span>}
  <label>last name1111 </label>
  <input {...register('lastName',{required:true,minLength:3})}/>
  {errors.lastName&&<span className='text-red-700'>minlength must large three letters  </span>}

  <select className='bg-cyan-100 my-2 rounded-md text-gray-800' {...register('gender')}>
    <option value='a'>female</option>
    <option value='b'>male</option>

  </select>
 <div className='flex flex-col bg-green-300 my-2 rounded-md'>
     <label>
          <input
            type="checkbox"
            value="swimming"
            {...register('hobbies')}
          />
          Swimming
      </label>
      <label>
          <input
            type="checkbox"
            value="football"
            {...register('hobbies')}
          />
          football
      </label>
      <label>
          <input
            type="checkbox"
            value="Reading"
            {...register('hobbies')}
          />
          Reading 
      </label>

      </div>
<div className='flex flex-col bg-blue-500 py-2 rounded-md'>
<label>
          <input
            type="radio"
            value="London"
            {...register('city')}
           
          />
          London
        </label>
        <label>
          <input
            type="radio"
            value="paris"
            {...register('city')}
           
          />
          paris
        </label>
        <label>
          <input
            type="radio"
            value="new york"
            {...register('city')}
           
          />
          new york
        </label>

        
</div>
<input className='bg-black rounded-md text-white p-3 my-5' type='submit'/>
</form>
      </div>
  )
}

export default FormPersonal
