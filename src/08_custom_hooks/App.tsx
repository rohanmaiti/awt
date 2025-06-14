import React, { useRef } from 'react'
import { useGetData } from './useGetData'
import { useCalculate } from './useCalculate'
import { useName } from './useName';
export default function App(){
// const result = useGetData('https://dummyjson.com/test');
// const {result} = useCalculate(10,20,'+');
// const [name, changeName, resetName] = useName();
// const nameRef = useRef<HTMLInputElement | null>(null);
  return ( 
    <div>
    {/* example-01 */}
    {/* {JSON.stringify(result)}; */}

    {/* example-02 */}
    {/* {result} */}

    {/* example-03 */}
    {/* {name}
    <input ref={nameRef}type='text' placeholder='enter name' />
    <button onClick={()=>changeName(nameRef.current.value)} >change name</button>
    <button onClick={resetName} >reset name</button> */}
    </div>
  )
}
