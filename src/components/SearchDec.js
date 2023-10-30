const SearchDec = (props) =>{
    const {setSearchText,filterProducts} = props;
    function onChangeHandler(e){
        var searchText = e.target.value;
        setSearchText(searchText);
    }


    return(
        <>
            <div className="p-5 flex lg:flex-row flex-col justify-around border-b-2 lg:gap-0 gap-y-10 border-green-800 gap-x-10">
                <div className="flex lg:gap-x-[50px] gap-x-[30px] items-center">
                    
                        <input type="text" onChange={onChangeHandler}  className="lg:px-8 lg:py-2 px-5 py-2  border-x-0 border-b-2 border-t-0 lg:w-auto w-full
                                                                                border-0  border-gray-800 outline-none rounded-t-lg   ">

                        </input>
                        <button onClick={()=>filterProducts()} className="rounded-xl hover:bg-red-700 text-white bg-rose-600 py-2 px-3">Search</button>
                    
                   
                </div>  
                <div  className="">
                    <h1 className="text-5xl text-green-500 font-bold leading-[50px]">Explore <span className="text-rose-500">&</span> Buy  <span className="text-yellow-400">Beautiful Products</span></h1>
                </div>
            </div>
        </>
    )
}

export default SearchDec;