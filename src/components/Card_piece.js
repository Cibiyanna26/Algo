import React from "react";
import { CDN_URL } from "../common/cimage";
import { Link } from "react-router-dom";
import addCart from '../assets/cart.png';
import { useDispatch } from "react-redux";
import { addItem } from "../common/cartSlice";



const Card_piece = (props)=>{
    var {data,key} = props;

    const dispatch = useDispatch();
    
    const handleAddItem=(item)=>{
        dispatch(addItem(item));
    }


    return (
        
            <>
            <div  className="w-[300px]  h-[400px] bg-white rounded-xl p-2 flex flex-col gap-y-5 shadow-sm shadow-gray-500
                              hover:border-b-gray-800 border-b-8 transition ease-in-out relative cursor-default" key={data.id}> 
                
                <Link 
                            to={'/product/'+data.id}
                            state={{data:data}}
                            
                >
                <div className="flex  overflow-hidden rounded-xl h-[200px]  cursor-pointer border-2 ">      
                        <img src={data.thumbnail} alt="image" className="w-full h-full object-contain "></img>
                </div>

                </Link>
                <div className="flex flex-col gap-y-2 overflow-hidden">
                    <h1 className="font-semibold text-center py-1">{data.title}</h1>
                    <p className="font-light text-[12px]">{data.description}</p>
                    <h4 className="class-medium text-red-500">Rating : {data.rating} ⭐⭐⭐⭐⭐</h4>
                    <span className="font-medium"><span className="text-blue-400">Price :</span> ₹{data.price}</span>
                </div> 
                <button className="w-[50px] h-[50px] absolute  
                                            bg-white p-2 rounded-xl shadow-sm shadow-gray-500 bottom-[10px] right-[10px]"
                                            onClick={()=>handleAddItem(data)}
                >
                    <img src={addCart} className=""></img>
                </button> 
                
            </div> 
            </>
    )
        
    
}


export default Card_piece;