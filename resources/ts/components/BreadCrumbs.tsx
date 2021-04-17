import React from "react";
import { Link } from "react-router-dom";
import { ICategory } from "../shares/Interfaces";
import { Pages } from "../shares/URLs";

interface IBreadCrumbsProps {
    categoryId: number;
    categories: ICategory[];
}

const BreadCrumbs: React.FC<IBreadCrumbsProps> = ({
    categoryId,
    categories,
}) => {
    if (categoryId === 0) {
        return (
            <ul>
                <li>صفحه نخست</li>
            </ul>
        );
    }

    const thisCategory = categories.find((c) => c.id === categoryId);
    if (!thisCategory) {
        return (
            <ul>
                <li>دسته بندی پیدا نشد</li>
            </ul>
        );
    }

    let categoryTree: ICategory[] = [];
    for (let index = thisCategory.parentId; index >= 0; ) {
        const cat = categories.find((c) => c.id === index);
        if (cat) {
            categoryTree.unshift(cat);
            index = cat.parentId;
        } else {
            index = 0;
        }
    }

    return (
        <ul>
            <li>
                <Link to={Pages.HomePage}> صفحه نخست</Link>
            </li>
            {categoryTree.map((cat) => (
                <li key={cat.id}>
                    <Link to={Pages.HomePage + cat.id}>{cat.name}</Link>
                </li>
            ))}

            <li>{thisCategory.name}</li>
        </ul>
    );
};

export default BreadCrumbs;
