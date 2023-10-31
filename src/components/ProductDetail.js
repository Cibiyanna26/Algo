import { useParams , useLocation} from "react-router-dom";
import ProductTopDetails from "./ProductTopDetails";
const ProductDetail = ()=>{
    const{id} = useParams();
    const location = useLocation();
    const data = location.state.data;
   
    return <section className="bg-gray-300">
            <div className="flex flex-col gap-y-3 justify-center items-center py-3 border-b-2 border-black bg-slate-50">
                <h1 className="text-3xl text-blue-700 font-bold">Product Details</h1>
            </div>
            <ProductTopDetails data={data}/>
        </section>
    
}

export default ProductDetail;