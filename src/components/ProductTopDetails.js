import { useDispatch } from "react-redux";
import { addItem } from "../common/cartSlice";
import {Link} from 'react-router-dom'
const ProductTopDetails =({data})=>{

    const dispatch = useDispatch();

    const handleAddItem = (item)=>{
        dispatch(addItem(item));
    }

    return(
        <>
            <div className="w-full lg:h-[83vh] flex items-center p-3">
                <div className="lg:w-4/5  mx-auto overflow-hidden bg-white rounded-xl p-4 shadow-sm shadow-gray-600">
                    <div className="flex lg:flex-row flex-col lg:gap-x-[70px] lg:gap-y-0 gap-y-5 flex-wrap">
                        <div className="lg:w-2/5 flex justify-center lg:h-[500px] w-full h-full">
                            <img src={data.thumbnail} className="object-full rounded-xl"></img>
                        </div>
                        <div className="lg:flex-1">
                            <div className="flex flex-col gap-y-8 overflow-hidden">
                                <div className="flex flex-col gap-y-3">
                                    <h1 className="text-3xl font-semibold">{data.title}</h1>
                                    <p className="text-lg font-light text-gray-800">{data.description}</p>
                                </div>
                                <div className="flex flex-row gap-x-10">
                                    <h4 className="text-bold text-xl text-red-500">Rating : <span className="text-black">{data.rating}</span> ⭐⭐⭐⭐⭐</h4>
                                    <h4 className="text-blue-700 text-lg">{data.category}</h4>
                                </div>
                                <div className="flex flex-col gap-y-4">
                                    <h1 className="text-xl">Brand : <span className="bg-red-400 rounded-xl py-2 px-3 text-white text-lg">{data.brand}</span></h1>
                                    <h1 className="text-2xl text-bold">Price</h1>
                                    <div className="flex flex-col gap-y-6">
                                        <button className="text-semibold text-lg bg-purple-600  text-white py-2 px-3 
                                                            cursor-default rounded-xl w-[200px]">Diwali Festival</button>
                                      
                                        <label className="text-xl text-rose-400">{data.discountPercentage}%  <span className="text-black">Discount</span> </label>
                                        <p className="text-2xl"> ₹{data.price}<span className=" text-sm ml-2 font-light">M.R.P</span></p>
                                    </div>
                                </div>          
                                <div className="flex gap-x-8">
                                    <Link to='/cart' className="bg-yellow-500 rounded-xl py-2 px-6 text-white">Buy</Link>
                                    <button 
                                        className="bg-green-500 rounded-xl py-2 px-3 text-white" 
                                        onClick={()=>handleAddItem(data)}>
                                            Add To Cart
                                    </button>
                                </div>                      
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}


export default ProductTopDetails;