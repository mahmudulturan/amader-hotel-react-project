import { useLoaderData } from "react-router-dom";
import { useState } from 'react';

const ProductDetails = () => {
    const {meals} = useLoaderData();
    const {strArea: area, strCategory: category, strInstructions: instruction, strMeal: title, strMealThumb: image, strYoutube: youtube} = meals[0];
    const mealsDetail = meals[0];
    // const [ingriedents,setIngriedents] = useState([]);
    const newIngriedents = [];
    const ingriedents = newIngriedents;
    
    for(const item in mealsDetail){
        const key = item;
        const value = mealsDetail[key]
        if(key.includes('strIngredient')){
            newIngriedents.push(value);
        }
    }
    // setIngriedents(newIngriedents)
    
    return (
        <div className="space-y-4">
            <h1 className="text-3xl font-semibold">{title}</h1>
            <div className="flex">
            <img className="w-96 rounded-lg" src={image} alt="" />
            <div>
                <ul className="font-medium ml-8">
                <h4 className="text-2xl">Ingriedents</h4>
                {
                    ingriedents.map((item, idx)=> item && <li className="list-disc" key={idx}>{item}</li>)
                }
                </ul>
            </div>
            </div>
            <p className="text-2xl font-medium"><span>Area: {area}</span>  <span>Category: {category}</span></p>
            <p className="text-lg font-medium drop-shadow-lg"> <span className="text-2xl font-semibold">Instruction:  </span> {instruction}</p>
            <p className="text-redColor underline font-medium"><a href={youtube}>Tutorial</a></p>
        </div>
    );
};

export default ProductDetails;