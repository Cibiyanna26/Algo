import React from "react";


const TopRestaurant = (props) =>{
    const {products,updateTopPro} = props;
    console.log("top",props);
    var filteredProduct = products.filter((res)=>{
        return res.rating>4;
    });
    console.log("filteredproduct",filteredProduct);
    for (let i = 0; i < filteredProduct.length; i++){
        console.log(filteredProduct[i]," ",i);
    }
    return(
        <>
        <div className="p-4">
            <button className="border-2 border-black py-2 px-3 bg-white rounded-xl hover:bg-gray-300" onClick={()=>updateTopPro(filteredProduct)}>Top Rated</button>
        </div>
            
        </>
    )
    
}

export default TopRestaurant;