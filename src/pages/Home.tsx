import React from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import BreadCrumbs from "../components/BreadCrumbs";
import { ICategory, IFacility } from "../shares/Interfaces";
import { APP_LOGO } from "../shares/Constants";
import { ApplicationState } from "../store";
import { Pages } from "../shares/URLs";

interface IHomeProps {
  categories: ICategory[];
  facilities: IFacility[];
}

interface IParamTypes {
  arg: string;
}

const Home: React.FC<IHomeProps> = ({ categories, facilities }) => {
  const [searchText, setSearchText] = React.useState<string>("");
  const [categoryId, setCategoryId] = React.useState<number>(0);

  const [categoryList, setCategoryList] = React.useState<ICategory[]>([]);
  const [facilityList, setFacilityList] = React.useState<IFacility[]>([]);
  const [titleElement, setTitleElement] = React.useState<JSX.Element>();

  // save query arg in start of app
  const { arg } = useParams<IParamTypes>();
  React.useEffect(() => {
    const id = Number(arg);

    if (id !== undefined && !isNaN(id)) {
      setCategoryId(id);
      setSearchText("");
    } else if (arg && arg.trim() !== "") {
      setCategoryId(0);
      setSearchText(arg.trim());
    } else {
      setCategoryId(0);
      setSearchText("");
    }
  }, [arg]);

  // for change search
  React.useEffect(() => {
    setCategoryList([]);
    setFacilityList([]);
    
    if (searchText.length !== 0) {
      // search in all facility
      setCategoryList(categories.filter((c) => c.name.includes(searchText)));
      setFacilityList(
        facilities.filter(
          (f) => f.name.includes(searchText) || f.tags.includes(searchText)
        )
      );
      setTitleElement(
        <h2 className="text-center">نتایج جستجو برای {searchText}</h2>
      );
    } else {
      setCategoryList(categories.filter((c) => c.parentId === categoryId));
      setFacilityList(facilities.filter((f) => f.categoryId === categoryId));
      setTitleElement(
        <div className="text-sm breadcrumbs">
          <BreadCrumbs categoryId={categoryId} categories={categories} />
        </div>
      );
    }
  }, [categoryId, categories, searchText, facilities]);

  return (
    <Layout>
      <div className={"flex " + (searchText ? "flex-row" : "flex-col")}>
        <div className="max-w-xs m-auto">
          <figure>
            <img src={process.env.PUBLIC_URL + APP_LOGO} alt="رامسر اپ" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center vazir-font">رامسر اپ</h2>
          </div>
        </div>
        <div className="w-2/3 md:max-w-sm m-auto">
          <div className="form-control">
            <input
              type="text"
              placeholder="جستجو"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              className="input input-info input-bordered vazir-font"
            />
            <label className="label">
              <span className="label-text-alt vazir-font">
                مثل کلیدساز یا تاکسی یا بیمارستان
              </span>
            </label>
          </div>
        </div>
      </div>

      <div className="card shadow max-w-xs m-auto vazir-font">
        {titleElement}
      </div>

      <div className="flex flex-wrap justify-evenly">
        {facilityList.map((facility) => (
          <div
            key={facility.id}
            className="card shadow p-6 lg:card-side bordered"
          >
            <figure>
              <img
                width="100"
                alt={facility.name}
                src={
                  process.env.PUBLIC_URL +
                  (facility.img ? facility.img : APP_LOGO)
                }
              />
            </figure>
            <div className="card-body justify-evenly">
              <h2 className="card-title vazir-font">{facility.name}</h2>
              {facility.description && facility.description.length > 0 && (
                <p className="vazir-font">{facility.description}</p>
              )}
              <p className="vazir-font">آدرس: {facility.address}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-evenly">
        {categoryList.map((category) => (
          <Link
            className="max-w-xs m-2"
            key={category.id}
            to={process.env.PUBLIC_URL + Pages.HomePage + category.id}
          >
            <div className="card bordered shadow-2xl hover:shadow-lg">
              <figure>
                <img
                  src={process.env.PUBLIC_URL + category.img}
                  alt={category.name}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-center vazir-font">
                  {category.name}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

// {
//   const { id } = useParams<IParamTypes>();

//   const pId = Number(id ?? 0);
//   console.log(id, pId);

//   return (
//     <Layout>
//       <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-col-6">
//         {categories
//           .filter((c) => c.parentId === pId)
//           .map((category) => (
//             <Link
//               key={category.id}
//               to={process.env.PUBLIC_URL + Pages.HomePage + category.id}
//             >
//               <div className="card bordered shadow-2xl hover:shadow-lg">
//                 <figure>
//                   <img
//                     src={process.env.PUBLIC_URL + category.img}
//                     alt={category.name}
//                   />
//                 </figure>
//                 <div className="card-body">
//                   <h2 className="card-title text-center">{category.name}</h2>
//                 </div>
//               </div>
//             </Link>
//           ))}
//       </div>
//     </Layout>
//   );
// };

const mapStateToProps = (state: ApplicationState) => ({
  categories: state.data ? state.data.categories : [],
  facilities: state.data ? state.data.facilities : [],
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
