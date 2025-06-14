import { useEffect, useState } from "react";

export function useCalculate( num1:number|string, num2:number|string, operation:string ) {
  const [result, setResult] = useState<number | string>(0);
  try {
    useEffect(() => {
      switch (operation) {
        case "+":
          setResult(() => {
            return parseInt(num1) + parseInt(num2);
          });
          break;
        case "-":
          setResult(() => {
            return parseInt(num1) - parseInt(num2);
          });
          break;
        case "*":
          setResult(() => {
            return parseInt(num1) * parseInt(num2);
          });
          break;
        case "/":
          setResult(() => {
            return parseInt(num1) / parseInt(num2);
          });
          break;
      }
    }, [num1, num2, operation]);
  } catch (error) {
    console.log(error);
  }

  return {
    result,
  };
}
