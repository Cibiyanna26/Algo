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
             <div className="py-8 flex justify-center items-center  lg:text-2xl text-xl border-b-2 border-b-white border-dotted font-bold bg-gray-200">
                <h1>Products available in the shop</h1>
                
            </div>
            <div className="flex justify-evenly lg:gap-x-5 lg:gap-y-8 gap-x-2 gap-y-3 flex-wrap p-4 border-b-2 border-dotted border-b-white">

            {
                category && category.map && category.map((cat,ind)=>{
            
                    return(
                        <div key={ind}>
                            <button 
                                onClick={()=>filterCat(cat)} 
                                className="lg:py-2 lg:px-3 bg-blue-700 rounded-xl text-white lg:text-sm text-xs py-1 px-2">
                                    {cat}
                            </button>
                        </div>
                    )
                })
            }
            </div>
        </>
    )
}

export default Categories;