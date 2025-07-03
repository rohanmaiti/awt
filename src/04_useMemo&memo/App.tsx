// create a app that does two things
// 1. increase a counter by one
// 2. let use put a number in a input box and you will show the sum form 1 to n
// one restriction every thing need to be under a single component

// import { useMemo, useState } from "react";
// function App() {
//   const [count, setCount] = useState<number>(0);
//   const [input, setInput] = useState<number>(0);

//   const handleClick = () => {
//     setCount((prev) => Number(prev) + 1);
//   };

//   //* without useMemo
//   //   let result = 0;
//   //   for (let i = 1; i <= input; i++) {
//   //     result += i;
//   //   }

//   //* with useMemo
//   const result = useMemo(() => {
//     let ans = 0;
//     for (let i = 1; i <= input; i++) {
//       ans += i;
//     }
//     return ans;
//   }, [input]);

//   return (
//     <>
//       <input
//         type="number"
//         onChange={(e:any) => setInput(e?.target?.value)}
//         placeholder="enter number"
//         value={input}
//       />
//       <h2>The sum is {result}</h2>

//       <br />
//       <button onClick={handleClick}>click {count}</button>
//     </>
//   );
// }
// export default App;



// * memo
// import React, { useState } from 'react';
// function App(){
//   console.log('app component re-renders');
//   const [count, setCount] = useState<number>(0);
//   const number:number = 1;
//   return (
//   <React.Fragment>
//   <div>
//     <button onClick={()=> setCount(count+1)}  >click { count }</button>
//   </div>
//   <br />
//   <div>
//      <Button number={number} />
//   </div>
//   </React.Fragment>)
// }

// function Button({number}:{number:number}){
//   console.log('button component re-renders')
//   return (
//    <button>click me </button>
//   )
// }
// export default App;

// * in the above code on rendering app component it's child component ie Button component 
// gets re-renders each time 
// but ideally it should not happen as the Button component is not getting changed or the props 
// of button component is getting changed

// so how to solve this ?? >> use memo 
// it stops re-render of child component if the porps of the child component remains unchanged
// here in this case the Button component is getting a prop number that is one constant
// so it should not re-render each time the parent re-renders

// * below is the memo code -->
import React, { memo, useState } from 'react';
function App(){
  console.log('app component re-renders');
  const [count, setCount] = useState<number>(0);
  const number:number = 1;
  return (
  <React.Fragment>
  <div>
    <button onClick={()=> setCount(count+1)}  >click { count }</button>
  </div>
  <br />
  <div>
     <Button number={number} />
  </div>
  </React.Fragment>)
}

const Button = memo(function ({number}:{number:number}){
  console.log('button component re-renders')
  return (
   <button>click me </button>
  )
})
export default App;
// * cautiton : if the passing prop is string and number then only memo works else if the props is 
// of type referance like-->  object, array or function, it will not work --> then we'll have to use useCallback
