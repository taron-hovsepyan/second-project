import React, { useEffect } from "react";
import { countStore } from "./store/CountStore";
import { observer } from "mobx-react-lite";


const Count = observer(() =>{
    const { count, increment, decrement, getTodo, todos } = countStore;

    useEffect(()=>{
        getTodo()
    }, [])

    return (
        <>
        <button onClick={() => increment()}>Increment</button>
        <button onClick={()=>decrement()}>Decrement</button>
        {count}
        {
            JSON.stringify(todos)
        }
        </>
    )
})
export default Count