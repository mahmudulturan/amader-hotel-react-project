import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";

const Categories = () => {
    const {categories} = useLoaderData();
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {
                categories.map((category,indx) => <Category key={indx} category={category}></Category>)
            }
            </div>
        </div>
    );
};

export default Categories;