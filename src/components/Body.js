import React, { useEffect } from "react";
import { Component } from "react";
import Card from "./Cards";
import states from "../utils_data/data";
import Card_piece from '../components/Card_piece';
import { useState } from "react";
import Shimmer from "./Shimmer";
import useOnline from "../common/useOnline";
import TopRestaurant from "./TopRestarunt";


const Search = () => {
    
    const[searchText,setSearchText]=useState("");
    const [allRestaurant,setAllRestaurant] = useState([]);
    const [ filteredMovieCard,setFilteredMovie ] = useState([]);
    const [top10,settop10] = useState(false);
    console.log(filteredMovieCard);
    function OnChangeHandler(e){
        setSearchText(e.target.value);
    }

    function filterRestaurant(){
        const filteredRes = allRestaurant.filter((res)=>{
            return res.info.name.toLowerCase().includes(searchText.toLowerCase());
        })
        setFilteredMovie(filteredRes);
        console.log(filteredRes);
        settop10(false);
    }

    function updateTopRes(filteredTopRestaurant){
        setFilteredMovie(filteredTopRestaurant);
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
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2194391&lng=78.16772360000004&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log('fetch',json);
        setFilteredMovie(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  //? optional data
        
        setAllRestaurant(
            json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
    }
    return (
        <div className="search-movie w-full bg-gray-200">
            <div className="p-5 flex lg:flex-row flex-col justify-around border-b-2 lg:gap-0 gap-y-10 border-green-800 gap-x-10">
                <div className="flex lg:gap-x-[50px] gap-x-[30px] items-center">
                    
                        <input type="text" onChange={OnChangeHandler}  className="lg:px-8 lg:py-2 px-5 py-2  border-x-0 border-b-2 border-t-0 lg:w-auto w-full
                                                                                border-0  border-gray-800 outline-none rounded-t-lg   ">

                        </input>
                        <button onClick={filterRestaurant} className="rounded-xl hover:bg-red-700 text-white bg-rose-600 py-2 px-3">Search</button>
                    
                   
                </div>  
                <div  className="">
                    <h1 className="text-5xl text-green-500 font-bold leading-[50px]">Explore <span className="text-rose-500">&</span> Eat  <span className="text-yellow-400">Delicious Food</span></h1>
                </div>
            </div>
            <div className="py-8 flex justify-center items-center  text-2xl font-bold bg-gray-200">
                <h1>Food available in the shop</h1>
                
            </div>
            <div className="flex justify-end">
                    {top10==true ?
                        <h1 className="text-2xl text-teal-800 p-5 font-bold">Top Rated Restaurant</h1>
                    :
                        <TopRestaurant restaurants={allRestaurant} updateTopRes={updateTopRes}/>
                    }
                    
            </div>
            {   filteredMovieCard.length ==0 ? <Shimmer/> : 
                    <div className="w-full">
                        <div className="bg-gray-200 flex flex-row  gap-x-[50px] gap-y-[50px] flex-wrap items-center container mx-auto justify-around pb-10">
                            
                            { 
                                filteredMovieCard && filteredMovieCard.map && filteredMovieCard.map((res,ind)=>{
                                    return (
                                        <>
                                            <Card_piece data = {res} key={ind}/>
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