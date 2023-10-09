'use client'
import FormPersonal from '@/componenthook/FormPersonal'
import Formbasic from '@/componenthook/Formbasic'
import Formintegeated1 from '@/componenthook/Formintegrated1'
import Formoption from '@/componenthook/Formoption'
import Formvalidation from '@/componenthook/Formvalidation'
import FormwithRedux from '@/componenthook/FormwithRedux'
import FormwithUI from '@/componenthook/FormwithUI'
import FormApiHook from '@/componenthook/ui/FormApiHook'
import TodoFetch from '@/components/TodoFetch'
import TodoForm from '@/components/TodoForm'
import TodoFormQuery from '@/components/TodoFormQuery'
import TodoFormRoute from '@/components/TodoFormRoute'
import TodoList from '@/components/TodoList'
import TodoQuery from '@/components/TodoQuery'
import next from 'next'
import Image from 'next/image'

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
export default async function Home() {
  const todos=await getData();
  return (
    <main >
       {/* <TodoForm />
        <TodoList/>
        <TodoFormQuery/>
        * <TodoFetch items={todos}/>  
        <TodoQuery/>
         <Formoption></Formoption>
        <Formvalidation></Formvalidation>
        <Formbasic></Formbasic>*/}
        <FormPersonal/>
        <Formintegeated1/>
        <FormwithUI></FormwithUI>
        <FormApiHook/>
    
       
    </main>
  )
}
