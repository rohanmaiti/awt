import { useEffect, useState } from "react";

export function useGetData(url:string){
    const [result, setResult] = useState<any>();
    try {
        async function fetchUrl(url:string){
            const res = await fetch(`${url}`);
            const data = await res.json();
            setResult(data);
        }
        useEffect(()=>{
            fetchUrl(url)
        },[url])
    } catch (error:any) {
        return <h1>Error occur while fetching Data</h1>
    }

    return result;
}