import React from "react";
import Logo from '../assets/blacklogo1.jpg'
import useOnline from "../common/useOnline";
import { Link } from "react-router-dom";
import cartImg from '../assets/shopping-online.png'
import basketImg from '../assets/basket.png';
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector"; // select data from store




const Header = ()=>{
    const isonline = useOnline();

    const cartItems = useSelector(store=>store.cart.items);


    return <nav className="w-full bg-gray-800 text-white">
        <div className="container mx-auto flex lg:flex-row flex-col gap-y-5 p-5 justify-center">
            <div className="logo  flex-1 flex lg:justify-normal lg:items-start justify-center items-center">
                <Link to="/"><img src={Logo} className="w-[50px]"></img></Link>
                
            </div>
            <div className=" flex flex-row justify-end gap-x-10 pr-10 items-center text-xl ">
                <h1>Developer</h1>
                <h1>Profile</h1>
                <Link  to="/about">About</Link>
                <Link to="/cart" className="relative w-[60px]">
                                <p className="absolute top-[-5px] right-[-5px]  text-sm
                                                bg-red-500 rounded-full w-[30px] h-[30px] flex items-center justify-center">
                                                    {cartItems.length}
                                </p>
                                <img src={basketImg} className="w-[50px] h-[50px]"></img>
                </Link>
                
            </div>
        </div>
    </nav>
}

export default Header;