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
import SearchDec from "./SearchDec";
const Search = () => {
    
    const[searchText,setSearchText]=useState("");
    
    const [top10,settop10] = useState(false);

    const [allphone,setallphone] = useState([]);
    const [filteredPhone,setFilteredPhone] = useState([]);

    function filterProducts(){
        const filteredPro = allphone.filter((res)=>{
            return res.title.toLowerCase().includes(searchText.toLowerCase());
        })
        setFilteredPhone(filteredPro);
       
        settop10(false);
    }

    function updateTopPro(TopfilteredProducts){
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
        setallphone(sjson.products);
        setFilteredPhone(sjson.products);
    }
    return (
        <div className="search-movie w-full bg-gray-200">
           <SearchDec setSearchText={setSearchText} filterProducts={filterProducts}/>
            
            <Categories filterCato={updateTopPro} allproducts={allphone}/>

            {top10===true ?
                <h1 className="text-2xl text-teal-800 p-5 font-bold">Top Rated products</h1>
            :
                <TopRestaurant products={allphone} updateTopPro={updateTopPro}/>
            }

      
            {   filteredPhone.length ==0 ? <Shimmer/> : 
                    <div className="w-full">
                        <div className="bg-gray-200 flex flex-row  gap-x-[50px] gap-y-[50px] flex-wrap items-center container mx-auto justify-around pb-10">
                            
                            { 
                                filteredPhone && filteredPhone.map && filteredPhone.map((res,ind)=>{
                                  
                                    return (
                                        <>

                                                <Card_piece data = {res} key={res.id} />    
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