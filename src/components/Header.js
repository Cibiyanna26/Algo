import React from "react";
import Logo from '../assets/blacklogo1.jpg'
import useOnline from "../common/useOnline";
import { Link } from "react-router-dom";
import cartImg from '../assets/shopping-online.png'
import basketImg from '../assets/basket.png';
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector"; // select data from store
import { useContext } from "react";
import userContext from "../common/userContext";
import { useState } from "react";


const Header = ()=>{
    const isonline = useOnline();
    const [isOpen, setIsOpen] = useState(false);
    const cartItems = useSelector(store=>store.cart.items);
    const {currentUser} = useContext(userContext);

    return <nav className="w-full bg-gray-800 text-white">
        <div className="container mx-auto flex lg:flex-row flex-col gap-y-5 p-5 justify-center flex-wrap">
            <div className="logo  flex-1 flex lg:justify-normal lg:items-start justify-between items-center">
                <Link to="/"><img src={Logo} className="w-[50px]"></img></Link>
                <div className="block lg:hidden">
                <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400 transition delay-150 duration-300"
                >
                <svg
                    className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
                <svg
                    className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                </svg>
                </button>
            </div>
            </div>
            
            <div className={`flex lg:flex-row flex-col lg:gap-y-0 gap-y-5   flex-wrap  items-center lg:justify-end lg:gap-x-10 lg:pr-10  text-xl
                            lg:w-auto lg:flex ${isOpen ? "block" : "hidden"} transition duration-300 ease-in-out delay-150`}>
                <a href="https://65358823e7d3242eff54631b--gregarious-lebkuchen-745004.netlify.app/" target="_blank" className="hover:text-blue-400">Developer</a>
                <Link  to="/about" className="hover:text-blue-400">About</Link>
                <Link to="/cart" className="relative w-[60px] ">
                                <p className="absolute top-[-5px] right-[-5px]  text-sm
                                                bg-red-500 rounded-full w-[30px] h-[30px] flex items-center justify-center">
                                                    {cartItems.length}
                                </p>
                                <img src={basketImg} className="w-[50px] h-[50px]"></img>
                </Link>
                <h1 className="hover:text-blue-400">{currentUser}</h1>
            </div>
        </div>
    </nav>
}

export default Header;