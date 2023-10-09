import { NextRequest, NextResponse } from "next/server";
import prisma from '@/prisma/connect'
import { revalidatePath } from "next/cache";
import { Todo } from "@prisma/client";
import { title } from "process";

export const GET = async (req: NextRequest) => {
  
    try {
        const todos=await prisma.todo.findMany()
       
       // console.log('todos route : ',todos)
        revalidatePath('/todoRoute')
        return new NextResponse(JSON.stringify(todos), { status: 200 });
        
    } catch (error) {
      console.log(error);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }),
        { status: 500 }
      );
        
    }
 

  };



export const POST = async (req: NextRequest) => {
  const body = await req.json();
  console.log('body : ',body)
  try {
   
    
    const product = await prisma.todo.create({
      data: {'title':body.testtext}
    });
    return new NextResponse(JSON.stringify(product), { status: 201 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
