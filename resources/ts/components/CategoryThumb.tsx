import React from "react";
import { Link } from "react-router-dom";
import { Pages } from "../shares/URLs";

import { ICategory } from "../shares/Interfaces";

interface ICategoryThumbProps {
    category: ICategory;
}

const CategoryThumb: React.FC<ICategoryThumbProps> = ({ category }) => (
    <Link className="max-w-xs m-2" to={Pages.HomePage + category.id}>
        <div className="card bordered shadow-2xl hover:shadow-lg">
            <figure>
                <picture>
                    <source
                        type="image/webp"
                        srcSet={category.img.replace("png", "webp")}
                    />
                    <source type="image/png" srcSet={category.img} />
                    <img alt={category.name} src={category.img} />
                </picture>
            </figure>
            <div className="card-body">
                <h2 className="card-title text-center vazir-font">
                    {category.name}
                </h2>
            </div>
        </div>
    </Link>
);

export default CategoryThumb;
