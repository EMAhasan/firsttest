'use client'
import { register } from 'module'
import { type } from 'os'
import React from 'react'
import {useForm,SubmitHandler} from 'react-hook-form'

enum GenderNum{
    femal='sex1',
    male='sex2'
}
type InputForm={
    firstname:string,
    lastname:string ,
    age:number,
    gender:GenderNum

}
const RHFBasic = () => {
    const {
        register
        ,handleSubmit
        ,watch
        ,formState:{errors}
    }=useForm<InputForm>()

    const onsubmit:SubmitHandler<InputForm>=(data)=>{
        console.log(data)

    }
  return (
    <div>
        <form className='flext flex-col items-center justify-center '  onSubmit={handleSubmit(onsubmit)}>
            <div>
            <label>first name :</label>
            <input className='mt-12 ml-10 border-blue-800 border '{...register('firstname',{required:true,minLength:2})}/>
            {errors.firstname&&<span className=' ml-4 text-red-600  '>this is required field </span>}
            </div>
           <div>
           <label>last name :</label>
           <input className='mt-2 ml-10 border-blue-800 border ' {...register('lastname')}/>
           </div>
           <div>
           <label>age       :</label>
           <input  className='mt-2 ml-10  border-blue-800 border ' {...register('age')} type='number'/>
           </div>

           <div>
           <label>Gender       :</label>
          <select {...register('gender')}>
            <option value='sex1'>male</option>
            <option value='sex2'>female</option>
          </select>
           </div>

           <div>
           <input className='mt-2 ml-10  bg-slate-900 text-white p-2 rounded-md  'type='submit'/>
           </div>
            
           
           
        </form>
    </div>
  )
}

export default RHFBasic