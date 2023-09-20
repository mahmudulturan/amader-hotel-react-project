import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const CategoryDetail = () => {
    const {meals} = useLoaderData();
    return (
        <div>
           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
             {
                meals.map(product=> <Product key={product.idMeal} product={product}></Product>)
             }
           </div>
        </div>
    );
};

export default CategoryDetail;