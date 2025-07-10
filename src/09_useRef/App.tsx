import { useRef } from "react";

function App(){
    const inputRef = useRef<HTMLInputElement | null>(null);
    const handleClick = () => {

        const text_value = inputRef?.current?.value;
        alert(text_value);
    }
    return (<>
    <input type="text" placeholder={'Enter some text'}  ref={inputRef} />
    
    <button onClick={handleClick} > show text </button>
    </>)
}

export default App;

// what useRef does ?
// it eleminates useState() from HTMLElement to taking input