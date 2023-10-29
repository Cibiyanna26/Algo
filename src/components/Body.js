import React, { useEffect } from "react";
import { Component } from "react";
import states from "../utils_data/data";
import Card_piece from '../components/Card_piece';
import { useState } from "react";
import Shimmer from "./Shimmer";
import useOnline from "../common/useOnline";
import TopRestaurant from "./TopProduct";
import Categories from "./Categories";
import { Link } from "react-router-dom";
const Search = () => {
    
    const[searchText,setSearchText]=useState("");
    const [top10,settop10] = useState(false);

    const [allphone,setallphone] = useState([]);
    const [filteredPhone,setFilteredPhone] = useState([]);


    function OnChangeHandler(e){
        setSearchText(e.target.value);
    }

    function filterProducts(){
        const filteredPro = allphone.filter((res)=>{
            return res.brand.toLowerCase().includes(searchText.toLowerCase());
        })
        setFilteredPhone(filteredPro);
        console.log(filteredPro);
        settop10(false);
    }

   

    function updateTopPro(TopfilteredProducts){
        console.log("updated");
        console.log(TopfilteredProducts);
        setFilteredPhone(TopfilteredProducts);
        settop10(true);
    }


    useEffect(()=>{
        Fetch();
        console.log('useeffect is called');
    },[]);

    const isonline = useOnline();
    if(!isonline){
        return <h1>Looks like you don't have money to pay for internet</h1>
    }

    
    const Fetch = async () =>{
       
        const sdata = await fetch('https://dummyjson.com/products/')
        const sjson = await sdata.json();
        console.log('sfetch',sjson.products);
        setallphone(sjson.products);
        setFilteredPhone(sjson.products);
    }
    return (
        <div className="search-movie w-full bg-gray-200">
            <div className="p-5 flex lg:flex-row flex-col justify-around border-b-2 lg:gap-0 gap-y-10 border-green-800 gap-x-10">
                <div className="flex lg:gap-x-[50px] gap-x-[30px] items-center">
                    
                        <input type="text" onChange={OnChangeHandler}  className="lg:px-8 lg:py-2 px-5 py-2  border-x-0 border-b-2 border-t-0 lg:w-auto w-full
                                                                                border-0  border-gray-800 outline-none rounded-t-lg   ">

                        </input>
                        <button onClick={filterProducts} className="rounded-xl hover:bg-red-700 text-white bg-rose-600 py-2 px-3">Search</button>
                    
                   
                </div>  
                <div  className="">
                    <h1 className="text-5xl text-green-500 font-bold leading-[50px]">Explore <span className="text-rose-500">&</span> Buy  <span className="text-yellow-400">Beautiful Products</span></h1>
                </div>
            </div>
            <div className="py-8 flex justify-center items-center  text-2xl font-bold bg-gray-200">
                <h1>Products available in the shop</h1>
                
            </div>
            <div className="flex p-4">
                <Categories filterCato={updateTopPro} allproducts={allphone}/>
            </div>
            <div className="flex justify-end">
                    {top10===true ?
                        <h1 className="text-2xl text-teal-800 p-5 font-bold">Top Rated products</h1>
                    :
                        <TopRestaurant products={allphone} updateTopPro={updateTopPro}/>
                    }
                    
            </div>
            {   filteredPhone.length ==0 ? <Shimmer/> : 
                    <div className="w-full">
                        <div className="bg-gray-200 flex flex-row  gap-x-[50px] gap-y-[50px] flex-wrap items-center container mx-auto justify-around pb-10">
                            
                            { 
                                filteredPhone && filteredPhone.map && filteredPhone.map((res,ind)=>{
                                    console.log(res.id);
                                    return (
                                        <>
                                            <Link 
                                                to={"/product/"+res.id}
                                                state={{data:res}}
                                            >
                                                <Card_piece data = {res} key={res.id} />
                                            </Link>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
            }
            
            
            
            
            
        </div>
        
        
    )
}


class Body extends Component{

    render(){
      
        return(
            <div className="">
                <Search/>
                
            </div>
        )
    }
}

export default Body;