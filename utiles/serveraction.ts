'use server'
import { Prisma } from "@prisma/client"
//import { createtodo } from "@/lib/dbclient"
import { revalidatePath } from "next/cache"
import { type } from "os"
import { z } from "zod"
import { createtodo, updatetodo } from "./database-FN"
import { Todo } from "./types"


const todoschema=z.object({
    title:z.string().max(20).min(3)
})
export async function createtodoaction(title:string) {
    //await createtodo(title)
    const val=todoschema.parse({title})
   
    
    const todo=await prisma?.todo.create({ data: {title }})
    revalidatePath('/')
    
}
export async function createAction(todo:Todo) {
    await createtodo(todo.title)
    revalidatePath('/')
    
}

export async function gettodosAction() {
   
    try {
        const todos=prisma?.todo.findMany()
        return{todos}
        
    } catch (error) {
        return {error}
        
    }
}

export async function updateTodoAction(id:number,done:boolean) {
    await updatetodo(id,done)
    revalidatePath('/')
    
}




