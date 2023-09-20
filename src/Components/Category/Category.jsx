import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Category = ({category}) => {
    const {strCategory: title, strCategoryThumb: image, strCategoryDescription: description} = category;
    
    return (
        <div>
            <div className="card h-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
       <img src={image} alt="Shoes" className="rounded-xl" />
         </figure>
         <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
         <p className='h-20 overflow-scroll'>{description}</p>
      <div className="card-actions">
      <Link to={`/categories/${title}`}>
      <button className="btn btn-primary">Browse More</button>
      </Link>
      </div>
         </div>
            </div>
        </div>
    );
};

Category.propTypes = {
    category: PropTypes.object,

}

export default Category;