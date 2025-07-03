import { memo, useState } from "react";
function App(){
    console.log('app renders')
    const [count, setCount] = useState<number>(0);
    const click_handler = ()=> {
        console.log('button clicked');
    }
    return (<>
    <Button click_handler={click_handler} />
    <br /><br />
    <div>
        <button onClick={()=>setCount((prev:number)=>prev+1)} >
            count { count }
        </button>
    </div>
    </>)
}
const Button = memo(function ({click_handler}:any){
console.log('button renders')
return (<button onClick={click_handler} >click me </button>)
})
export default App;

//* in the above example the Button component will re-render on rendering the parent App component
// but ideally it should not re-render as noting is being changing on that Butoon component
// why it is happening while i am using memo ??
// >> as function is of refeance type on each render of parent component, the click_handler funciton realocated memory each time
//    causeing passing new data each time as a prop
// then how solve this problem ?
// >> use useCallback hook that store the funtions referance in the cache on the first render
// and from the next time if dependencies are not change it will return the saved value else
// it will return the funciton newly

//* below is the code
// import { memo, useCallback, useState } from "react";
// function App() {
//   console.log("app renders");
//   const [count, setCount] = useState<number>(0);
//   const click_handler = useCallback(() => {
//     console.log("button clicked");
//   }, []);

//   return (
//     <>
//       <Button click_handler={click_handler} />
//       <br />
//       <br />
//       <div>
//         <button onClick={() => setCount((prev: number) => prev + 1)}>
//           count {count}
//         </button>
//       </div>
//     </>
//   );
// }
// const Button = memo(function ({ click_handler }: any) {
//   console.log("button renders");
//   return <button onClick={click_handler}>click me </button>;
// });
// export default App;
