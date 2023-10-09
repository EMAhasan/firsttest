'use client'
import React from 'react'
import Input from './ui/Input'
import {useForm,Controller, SubmitHandler} from 'react-hook-form'
import Select from "react-select"

interface IFormInput{
firstname:string
lastname:string
gender:{ label: string; value: string }
}
const FormwithUI = () => {
    const {control,handleSubmit}=useForm(
        {
            defaultValues:{
                firstname:'',
                lastname:'',
                gender:{label: 'string', value: 'string'}
            }
        })

        const onSubmit:SubmitHandler<IFormInput> =(data)=>{console.log('new data with UI : ',data)}

    
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller 
            name='firstname'
            control={control}
            render={({field})=> <Input {...field} />
        }
            />
   <Controller 
            name='lastname'
            control={control}
            render={({field})=> <Input {...field} />}
            />
          <input type="submit" />

          <Controller
        name="gender"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={[
                { value: "hh", label: "hhh" },
            { value: "strawberry", label: "Strawberry" },
            { value: "vanilla", label: "Vanilla" },
              
            ]}
          />
        )}
      />
        </form>
               
    </div>
  )
}

export default FormwithUI