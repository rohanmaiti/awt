// Example of rooling up the state || not optimal
// here this-->[bulbOn, setBulb] is beign rolled up to the lowes common ansistor so that both the child can use the state
// this is the ugly way of writing code | better use state management library like zustand or redux-toolkit etc 

import { useState } from "react";
export const LightBuld = () => {
  const [bulbOn, setBulb] = useState<boolean>(true);
  return (
    <div>
      <BulbOn bulbOn={bulbOn} />
      <ToogleBulb setBulb={setBulb} />
    </div>
  );
};

function BulbOn({ bulbOn }: { bulbOn: boolean }) {
  return <>{bulbOn ? "Light on" : "Light off"}</>;
}

function ToogleBulb({ setBulb }: { setBulb: any }) {
  return (
    <button
      onClick={() => {
        setBulb((prev: boolean) => !prev);
      }}
    >
      Toogle bulb
    </button>
  );
}
