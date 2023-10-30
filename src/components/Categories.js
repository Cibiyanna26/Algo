import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCategory from "../common/useCategory";
const Categories =(props)=>{
    const {allproducts,filterCato} = props;
    var category = useCategory();

    function filterCat(searchCat){
        const filterCatData = allproducts.filter((products)=>{
            
            return products.category===searchCat;
        })
        filterCato(filterCatData);
    }
     
    return(
        <>  
             <div className="py-8 flex justify-center items-center  text-2xl font-bold bg-gray-200">
                <h1>Products available in the shop</h1>
                
            </div>
            <div className="flex justify-evenly gap-x-5 gap-y-8 flex-wrap p-4">

            {
                category && category.map && category.map((cat,ind)=>{
            
                    return(
                        <div key={ind}>
                            <button onClick={()=>filterCat(cat)} className="py-2 px-3 bg-blue-700 rounded-xl text-white">{cat}</button>
                        </div>
                    )
                })
            }
            </div>
        </>
    )
}

export default Categories;