//database client functions 


import prisma from '@/prisma/connect'


export async function gettodos() {
   
    try {
        const todos=prisma.todo.findMany()
        return{todos}
        
    } catch (error) {
        return {error}
        
    }
}

export async function createtodo(title:string) {
  
    try {
        const todo= await prisma.todo.create({ data: {title }})
        return{todo}
        
    } catch (error) {
        return {error}
        
    }
}

export async function updatetodo(id:number,done:boolean) {
  
    try {
        const todo= await prisma.todo.update({where :{id} ,data: {done }})
        return{todo}
        
    } catch (error) {
        return {error}
        
    }
}
