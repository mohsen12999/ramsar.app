import React from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { ICategory } from "../shares/Interfaces";
import { ApplicationState } from "../store";

interface IHomeProps {
  categories: ICategory[];
}

interface IParamTypes {
  id: string;
}

const Home: React.FC<IHomeProps> = ({ categories }) => {
  const [searchText, SetSearchText] = React.useState<string>();

  return (
    <Layout>
      <div className={"flex " + (searchText ? "flex-row" : "flex-col")}>
        <div className="max-w-xs m-auto">
          <figure>
            <img
              src={process.env.PUBLIC_URL + "/img/national-park.png"}
              alt="رامسر اپ"
            />
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
                SetSearchText(e.target.value);
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

      <div className="flex flex-wrap justify-evenly">
        {categories
          .filter((c) => c.parentId === 0)
          .map((category) => (
            <Link
              className="max-w-xs m-2"
              key={category.id}
              to={process.env.PUBLIC_URL}
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
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
