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
            <div  className="w-[300px]  h-[400px] bg-white rounded-xl p-2 flex flex-col gap-y-5
                              hover:border-b-gray-800 border-b-8 transition ease-in-out relative cursor-default">
                
                <Link 
                            to={"/product/"+key}
                            state={{data:data}}
                            
                >
                <div className="flex  overflow-hidden rounded-xl h-[200px] object-contain cursor-pointer">      
                        <img src={data.thumbnail} alt="image" className=""></img>
                </div>

                </Link>
                <div className="flex flex-col gap-y-1 overflow-hidden">
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                    <h4>{data.rating} </h4>
                    <span>{data.price}</span>
                </div>
                <button className="w-[50px] h-[50px] absolute bottom-[-20px] right-[-20px] 
                                            bg-gray-300 p-2 rounded-xl"
                                            onClick={()=>handleAddItem(data)}
                >
                    <img src={addCart} ></img>
                </button> 
                
            </div> 
            </>
    )
        
    
}


export default Card_piece;