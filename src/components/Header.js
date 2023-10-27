import React from "react";
import Logo from '../assets/blacklogo1.jpg'
import useOnline from "../common/useOnline";

const Header = ()=>{
    const isonline = useOnline();
    return <nav className="w-full bg-teal-600 text-white">
        <div className="container mx-auto flex lg:flex-row flex-col gap-y-5 p-5 justify-center">
            <div className="logo  flex-1 flex lg:justify-normal lg:items-start justify-center items-center">
                <img src={Logo} className="w-[50px]"></img>
            </div>
            <div className=" flex flex-row justify-end gap-x-10 pr-10 items-center text-xl ">
                <h1>Developer</h1>
                <h1>Profile</h1>
                <h1>About</h1>
                <h1>Alive :{isonline?'✅':'🛑'} </h1>
            </div>
        </div>
        
    </nav>
}

export default Header;