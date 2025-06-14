// Example of rooling up the state || not optimal 

import React, { useState, type SetStateAction } from 'react'

export const LightBuld = () => {
  const [bulbOn, setBulb] = useState<boolean>(true);

  return (
    <div>
      <BulbOn bulbOn={bulbOn}  />
      <ToogleBulb setBulb={setBulb} />

    </div>
  )
}


function BulbOn({bulbOn}:{bulbOn:boolean}){
  return (
    <>
    {bulbOn ? "Light on" : "Light off"}
    </>
  )
}

function ToogleBulb({setBulb}:{setBulb:any}) {
  return (
    <button
    onClick={()=>{
      setBulb((prev:boolean) => !prev)
    }}
    >Toogle bulb</button>
  )
}

