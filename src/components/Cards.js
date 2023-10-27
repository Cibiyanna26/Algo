import React from "react";
import { CDN_URL } from "../common/cimage";

const Card = (props)=>{
    const {restaurants} = props;
    console.log(restaurants);
    
                
    return (
        <> 
        {   restaurants.map((mov,index)=>{
            console.log(mov.info);
            // const {name,cuisines,rating,cost,deliveryTime} = mov.info;
            const {name,cuisines,cloudinaryImageId,avgRating} = mov.info;
                    return(
                        <>
                        <div key={index} className="max-w-[300px]  max-h-[350px] bg-white rounded-xl p-2 flex flex-col gap-y-5  hover:border-b-gray-800 border-b-8 transition ease-in-out">
                            <div className="flex-1  overflow-hidden rounded-xl min-h-[130px] ">
                                <img src={CDN_URL + cloudinaryImageId} alt="image" className="object-contain "></img>
                            </div>
                            <div className="flex flex-col gap-y-1 overflow-hidden">
                                <h1>{name}</h1>
                                <p>{cuisines}</p>
                                <h4>{avgRating} </h4>
                                <span>500</span>
                            </div>
                            
                        </div> 
                        </>
                    )
                    
                })}
    
        </>
    )
        
    
}


export default Card;