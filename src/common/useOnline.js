import { useEffect, useState } from "react";

const useOnline = ()=>{
    const [onlineState,setOnlineState] = useState(true);

    const handleOnline = ()=>{
        setOnlineState(true);
    }
    const handleOffline = ()=>{
        setOnlineState(false);
    }

    useEffect(()=>{
        window.addEventListener('online',handleOnline);
        window.addEventListener('offline',handleOffline);
        return()=>{
            window.removeEventListener('online',handleOnline);
            window.removeEventListener('offline',handleOffline);
        }
        
    },[])

    return onlineState;
}


export default useOnline;