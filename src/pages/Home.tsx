import React from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { ICategory } from "../shares/Interfaces";
import { Pages } from "../shares/URLs";
import { ApplicationState } from "../store";

interface IHomeProps {
  categories: ICategory[];
}

interface IParamTypes {
  id: string;
}

const Home: React.FC<IHomeProps> = ({ categories }) => {
  const { id } = useParams<IParamTypes>();

  const pId = Number(id ?? 0);
  console.log(id, pId);

  return (
    <Layout>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-col-6">
        {categories
          .filter((c) => c.parentId === pId)
          .map((category) => (
            <Link
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
                  <h2 className="card-title text-center">{category.name}</h2>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </Layout>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  categories: state.data ? state.data.categories : [],
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
