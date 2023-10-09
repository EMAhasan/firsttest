import React, { ChangeEvent, Ref } from 'react'
import {ControllerProps,Controller, SubmitHandler} from 'react-hook-form'
type InputProps = {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
    disabled?: boolean;
    value: string;
    name: string;
    ref: Ref<HTMLInputElement>;
  };

const Input : React.FC<InputProps> =({
    onChange,
    onBlur,
    disabled,
    value,
    name,
    ref,
  }
    ) => {
  return (
    <div className='bg-yellow-200 p-1 border m-1  '>
        <label>{name} : </label>
        <input className='text-gray-800 border bg-green-200' onChange={onChange} onBlur={onBlur} disabled={disabled} value={value} ref={ref} ></input>
    </div>
  )
}

export default Input