import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const Product = ({product}) => {
    const {strMeal: title, strMealThumb: image, idMeal: id} = product;
  return (
    <div>
      <div className="max-w-sm bg-white box-shadow-md rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[408px] flex justify-between flex-col">
        <div className="py-3">
        <img
            className="w-60 rounded-lg mx-auto  drop-shadow-lg"
            src={image}
            alt=""
          />
        </div>
        <div>
        <h5 className="mb-2 px-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
        </div>
        <div className="py-2 px-2">
        <Link to={`/categories/product/${id}`}>
        <button className="btn py-2 px-3 bg-basicColor text-primaryColor text-center w-full">Show Details</button>
        </Link>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
    product: PropTypes.object,
}

export default Product;
