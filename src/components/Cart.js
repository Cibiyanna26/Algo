import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";


const Cart=()=> {
    const cartItems = useSelector((store)=>store.cart.items);
    let Tprice=0,Tdiscount=0,Tamount=0;
    for(let i=0; i<cartItems.length; i++) {
        Tprice += cartItems[i].price;
        Tdiscount += cartItems[i].discountPercentage;
    }
    Tamount = Tprice - (Tdiscount%100);
    return (
        <section className="w-full bg-gray-200 p-4">
            <div className="lg:w-4/5 mx-auto">
                <div className="flex lg:flex-row flex-col gap-x-[5%] lg:gap-y-0 gap-y-5">
                    <div className="bg-white p-3 lg:w-[65%] flex flex-col gap-y-5">
                        <div className="text-center">
                            <h1 className="text-2xl font-bold text-cyan-800">G-Grocery</h1>
                        </div>
                        <div className="flex flex-col gap-y-3  overflow-y-scrollbar no-scrollbar">
                            {cartItems.map((items)=>{
                               return   <div className="flex lg:flex-row flex-col gap-y-5   gap-x-[5%] p-2 border-b-2 border-dotted border-b-gray-300">
                                            <div className="lg:w-[25%]  rounded-xl overflow-hidden h-[150px] ">
                                                <img src={items.thumbnail} className="w-full h-full object-contain"></img>
                                            </div>
                                            <div className="lg:w-[75%] flex flex-col gap-y-3">
                                                <h1 className="text-2xl font-bold">{items.title}</h1>
                                                <p className="text-lg font-thin">{items.description}</p>

                                                <p className="text-lg font-medium"> 
                                                    ₹{items.price}<span className="text-[13px] font-extralight ml-2">M.R.P</span>
                                                    <span className="text-[15px] ml-5 text-rose-400">{items.discountPercentage}% <span className="text-black">offer</span></span>
                                                </p>
                                                <div className="text-right">
                                                    <button className="bg-red-500 py-2 px-3 rounded-xl text-white">Remove</button>
                                                </div>
                                            </div>
                                        </div>
                            })}
                            
                        </div>
                        <div className="p-4 lg:text-right text-center rounded-xl bg-blue-100">
                            <button className="py-4 px-5 bg-blue-500 rounded-xl hover:bg-blue-700 text-white">PURCHASE</button>
                        </div>
                    </div>
                    <div className="bg-white p-5 lg:w-[35%] h-[400px]">
                            <div className="text-center py-3 border-b-2 border-dotted border-b-gray-300">
                                <h1 className="text-2xl font-bold">PRICE DETAILS</h1>
                            </div>
                            <div className="flex flex-col gap-y-3  py-4 border-b-2 border-dotted border-b-gray-300">
                                <div className="flex flex-row justify-between">
                                    <h1 className="font-semibold">Price :</h1>
                                    <h1>₹{Tprice}</h1>
                                </div>
                                <div className="flex flex-row justify-between">
                                    <h1 className="font-semibold">Discount :</h1>
                                    <h1>₹{Tprice%100}</h1>
                                </div>
                                <div className="flex flex-row justify-between">
                                    <h1 className="font-semibold">Delivery Charge :</h1>
                                    <h1 className="text-green-400"><span className="line-through mr-3 text-black">$100</span>Free</h1>    
                                </div>
                            </div>
                            <div className="flex flex-row justify-between py-6 border-b-2 border-dotted border-b-gray-300" >
                                <h1 className="text-xl font-bold">Total Amount : </h1>
                                <p className="text-xl font-medium">₹{Tamount}</p>
                            </div>
                            <div className="py-6 border-b-2 border-dotted border-gray-200">
                                <i className="text-cyan-400 font-semibold text-medium">Amount you save on this PURCHASE</i>
                            </div>
                    </div>
                </div>
                
            </div>
            
        </section>
    );
}

export default Cart;