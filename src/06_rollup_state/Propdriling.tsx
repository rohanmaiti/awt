// propdrilling is to pass props form Higher level comp to a lower comp in the component tree
// context api solve the problem of prop drilling

import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext<any>(null);

export const Propdriling = () => {  
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

function Father() {
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


// to avoid the syntax of <UserContext.Provider value=... and so on what we can do ?
// creating a normal componet with all these logic and wrap it with children component
//   like This 

const Context = createContext<any | null>(null);
function UserProvider({children}){
    return (
        <Context.Provider value="abc">
            {children}
        </Context.Provider>
    )
}

// how to use it ?
function App(){
    return (
        <UserProvider>
            <Father/>
        </UserProvider>

    )
}

