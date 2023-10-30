const ProductTopDetails =({data})=>{
    return(
        <>
            <div className="w-full h-[83vh] flex items-center">
                <div className="w-4/5 mx-auto overflow-hidden bg-white rounded-xl p-4">
                    <div className="flex flex-row gap-x-[70px] flex-wrap">
                        <div className="w-2/5 flex justify-center h-[500px]">
                            <img src={data.thumbnail} className="object-full rounded-xl"></img>
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-col gap-y-8 overflow-hidden">
                                <div className="flex flex-col gap-y-3">
                                    <h1 className="text-3xl text-bold">{data.title}</h1>
                                    <p className="text-2xl text-semibold text-gray-800">{data.description}</p>
                                </div>
                                <div className="flex flex-row gap-x-10">
                                    <h4 className="text-bold text-xl">{data.rating} ⭐⭐⭐⭐⭐</h4>
                                    <h4 className="text-blue-700 text-lg">{data.category}</h4>
                                </div>
                                <div className="flex flex-col gap-y-4">
                                    <h1 className="text-xl">Brand : <span className="bg-red-400 rounded-xl py-2 px-3 text-white text-lg">{data.brand}</span></h1>
                                    <h1 className="text-2xl text-bold">Price</h1>
                                    <div className="flex flex-col gap-y-6">
                                        <button className="text-semibold text-lg bg-purple-600  text-white py-2 px-3 
                                                            cursor-default rounded-xl w-[200px]">Diwali Festival</button>
                                      
                                        <label className="text-xl text-rose-400">{data.discountPercentage}%  <span className="text-black">Discount</span> </label>
                                        <p className="text-2xl"> ₹{data.price}<span className=" text-sm ml-2 font-thin">M.R.P</span></p>
                                    </div>
                                </div>          
                                <div className="">
                                    <button className="bg-yellow-500 rounded-xl py-2 px-6 text-white">Buy</button>
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