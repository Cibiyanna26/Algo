import React from "react";
import { CDN_URL } from "../common/cimage";

const Card_piece = (props)=>{
    var {data,key} = props;
    console.log(data)
    
    
                
    return (
        
            <>
            <div  className="w-[300px]  h-[400px] bg-white rounded-xl p-2 flex flex-col gap-y-5  hover:border-b-gray-800 border-b-8 transition ease-in-out">
                <div className="flex  overflow-hidden rounded-xl h-[200px] object-contain">
                    {/* <img src={CDN_URL + data.cloudinaryImageId} alt="image" className="object-contain "></img> */}
                    <img src={data.thumbnail} alt="image" className="object-contain "></img>
                </div>
                <div className="flex flex-col gap-y-1 overflow-hidden">
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                    <h4>{data.rating} </h4>
                    <span>{data.price}</span>
                </div>
                
            </div> 
            </>
    )
        
    
}


export default Card_piece;