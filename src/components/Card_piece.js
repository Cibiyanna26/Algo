import React from "react";
import { CDN_URL } from "../common/cimage";

const Card_piece = (props)=>{
    var {data,key} = props;
    console.log(data)
    
    data = data.info;
                
    return (
        
            <>
            <div key={key} className="max-w-[300px]  max-h-[350px] bg-white rounded-xl p-2 flex flex-col gap-y-5  hover:border-b-gray-800 border-b-8 transition ease-in-out">
                <div className="flex-1  overflow-hidden rounded-xl min-h-[130px] ">
                    <img src={CDN_URL + data.cloudinaryImageId} alt="image" className="object-contain "></img>
                </div>
                <div className="flex flex-col gap-y-1 overflow-hidden">
                    <h1>{data.name}</h1>
                    <p>{data.cuisines}</p>
                    <h4>{data.avgRating} </h4>
                    <span>500</span>
                </div>
                
            </div> 
            </>
    )
        
    
}


export default Card_piece;