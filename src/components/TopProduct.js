import React from "react";


const TopRestaurant = (props) =>{
    const {products,updateTopPro} = props;
   
    var filteredProduct = products.filter((res)=>{
        return res.rating>4;
    });
   

    return(
        <>
        <div className="flex justify-end">
            <div className="p-4">
                <button className="border-2 border-black py-2 px-3 bg-white rounded-xl hover:bg-gray-300" onClick={()=>updateTopPro(filteredProduct)}>Top Rated</button>
            </div>
            
        </div>
       
        </>
    )
    
}

export default TopRestaurant;