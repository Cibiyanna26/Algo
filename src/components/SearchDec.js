import searchImg from '../assets/search.png'

const SearchDec = (props) =>{
    const {setSearchText,filterProducts} = props;
    function onChangeHandler(e){
        var searchText = e.target.value;
        setSearchText(searchText);
    }


    return(
        <>
            <div className="p-5 flex lg:flex-row flex-col justify-around border-b-2 lg:gap-0 gap-y-10 border-green-800 gap-x-10">
                <div className="flex lg:gap-x-[20px] items-center justify-around">
                    
                        <input  type="text" 
                                onChange={onChangeHandler} 
                                placeholder='Search' 
                                className="px-2 lg:py-2  py-2   lg:w-auto 
                                shadow-sm shadow-gray-400  outline-none  rounded-xl">
                        </input>
                        <button 
                            onClick={()=>filterProducts()} 
                            className="  text-white rounded-xl w-[40px] h-[40px] shadow-sm  overflow-hidden">
                            <img src={searchImg} className='w-full h-full object-fill'></img>
                        </button>
                    
                   
                </div>  
                <div  className="">
                    <h1 className="lg:text-3xl text-green-500 lg:font-bold 
                                    text-xl font-bold text-center"> 
                            Explore <span className="text-rose-500">&</span> Buy  <span className="text-yellow-400"><br/>Beautiful Products</span>
                    </h1>
                </div>
            </div>
        </>
    )
}

export default SearchDec;