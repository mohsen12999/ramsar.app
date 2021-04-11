import React from "react";
import { Link } from "react-router-dom";
import { Pages } from "../shares/URLs";

import { ICategory } from "../shares/Interfaces";

interface ICategoryThumbProps {
  category: ICategory;
}

const CategoryThumb: React.FC<ICategoryThumbProps> = ({ category }) => (
  <Link
    className="max-w-xs m-2"
    key={category.id}
    to={process.env.PUBLIC_URL + Pages.HomePage + category.id}
  >
    <div className="card bordered shadow-2xl hover:shadow-lg">
      <figure>
        <img src={process.env.PUBLIC_URL + category.img} alt={category.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-center vazir-font">{category.name}</h2>
      </div>
    </div>
  </Link>
);

export default CategoryThumb;
