import { useEffect, useState } from "react";

export const isFalsy=(value)=>value===0?           false:!value;
export const cleanObject=(object)=>{
    const result={...object}
    Object.keys(result).forEach(key=>{
        const value=result[key]
        if(isFalsy(value)){
            delete result[key]
        }
    })
    return result
}
export const useMount=(callback)=>{
    useEffect(()=>{
        callback()
    },[])
}
export const useDebounce=(value,delay)=>{
    const [debouncedValue,setDebounceValue]=useState(value)
    useEffect(()=>{
        //每次在value变化以后，设置一个定时器
        const timeout=setTimeout(()=>setDebounceValue(value),delay)
        //每次在上一个useEffect处理完成后在运行
        return ()=>clearTimeout(timeout)
    },[value,delay])
    return debouncedValue
}