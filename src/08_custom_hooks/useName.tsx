import { useState } from "react";

export function useName(){
    const [name, setName] = useState<string>('user');
    function changeName(newName:string){
        setName(newName);
    }
    function resetName(){
        setName('user');
    }

    return[
        name,
        changeName,
        resetName
    ]
}