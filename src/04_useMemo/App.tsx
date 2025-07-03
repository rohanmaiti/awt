// create a app that does two things
// 1. increase a counter by one
// 2. let use put a number in a input box and you will show the sum form 1 to n
// one restriction every thing need to be under a single component

import { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);
  const [input, setInput] = useState<number>(0);

  const handleClick = () => {
    setCount((prev) => Number(prev) + 1);
  };


  //* without useMemo
  //   let result = 0;
  //   for (let i = 1; i <= input; i++) {
  //     result += i;
  //   }

  //* with useMemo
  const result = useMemo(() => {
    let ans = 0;
    for (let i = 1; i <= input; i++) {
      ans += i;
    }
    return ans;
  }, [input]);

  return (
    <>
      <input
        type="number"
        onChange={(e:any) => setInput(e?.target?.value)}
        placeholder="enter number"
        value={input}
      />
      <h2>The sum is {result}</h2>

      <br />
      <button onClick={handleClick}>click {count}</button>
    </>
  );
}
export default App;
