import { useEffect, useState } from "react";
import { CAT_API } from "../common/cimage";

const useCategory = ()=>{
    const [categoryList,setCategoryList] = useState('');
    useEffect(()=>{
        Fetch();
    },[]);
    const Fetch = async () =>{
        var data = await fetch(CAT_API);
        data =await data.json();
        
        setCategoryList(data)
    }
    return categoryList;
}

export default useCategory;