// Example of rooling up the state

import React, { useState } from 'react'

export const LightBuld = () => {
  const [bulbOn, setBulb] = useState<boolean>(true);

  return (
    <div>
      <BulbOn bulbOn={bulbOn}  />
      <ToogleBulb setBulb={setBulb} />

    </div>
  )
}


function BulbOn({bulbOn}:{}){
  return (
    <>
    {bulbOn ? "Light on" : "Light off"}
    </>
  )
}

function ToogleBulb({setBulb}:any) {
  return (
    <button
    onClick={()=>{
      setBulb((prev:boolean) => !prev)
    }}
    >Toogle bulb</button>
  )
}
