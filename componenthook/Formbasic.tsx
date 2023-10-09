'use client'
import { useForm, SubmitHandler } from "react-hook-form"


type Inputs = {
  example: string
  exampleRequired: string
  exampleRequired2:string
}


export default function Formbasic() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)


  console.log(watch("example")) // watch input value by passing the name of it


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="bg-green-700 p-4 m-4 ">
    <form  onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />


      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      <input {...register("exampleRequired2", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span className="text-red-600">This field is required</span>}
      {errors.exampleRequired2 && <span className="text-red-600">This field is required22</span>}


      <input type="submit" />
    </form>
    </div>
  )
}