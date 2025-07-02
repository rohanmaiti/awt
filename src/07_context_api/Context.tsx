// *First understand what is prop drilling ?
// propdrilling is to pass props form Higher level comp to a lower comp in the component tree
// context api solve the problem of prop drilling

import { createContext, useContext, useEffect, useState } from "react";
const UserContext = createContext<any>(null); // this line should be created in a separate file and use it by import and export

export const Context = () => {  
  const [name, setName] = useState<string | null>(null);
  useEffect(()=>{
    setName("Rohan")
  },[])
  return <div>
    <UserContext.Provider value={{
        name:name,
        setName
    }} >
    <Father/>
    </UserContext.Provider>
  </div>;
};

export function Father() {
  return (
    <>
      <Son1 />
      <Son2 />
    </>
  );
}

function Son1() {
  return (
    <>
      <Child11 />
      <Child12 />
    </>
  );
}

function Son2() {
  return <Child21 />;
}

function Child11() {
  const {name} = useContext(UserContext);
  return (
    <>
      <h1>Child11 name Is {name}</h1>
    </>
  );
}

function Child12() {
  return (
    <>
      <h1>Child12</h1>
    </>
  );
}

function Child21() {
  return (
    <>
      <h1>Child21</h1>
    </>
  );
}



