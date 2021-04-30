import React from "react";
import { connect } from "react-redux";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";
import BreadCrumbs from "../components/BreadCrumbs";
import FacilityThumb from "../components/FacilityThumb";
import CategoryThumb from "../components/CategoryThumb";
import { ICategory, IFacility } from "../shares/Interfaces";
import { APP_LOGO } from "../shares/Constants";
import { ApplicationState } from "../store";
import { actionCreators } from "../store/Data";
import { MakeUrl, Pages } from "../shares/URLs";

interface IHomeProps {
  categories: ICategory[];
  facilities: IFacility[];

  LoadData: Function;
}

interface IParamTypes {
  arg: string;
}

const Home: React.FC<IHomeProps> = ({ categories, facilities, LoadData }) => {
  const [searchText, setSearchText] = React.useState<string>("");
  const [categoryId, setCategoryId] = React.useState<number>(0);

  const [categoryList, setCategoryList] = React.useState<ICategory[]>([]);
  const [facilityList, setFacilityList] = React.useState<IFacility[]>([]);
  const [titleElement, setTitleElement] = React.useState<JSX.Element>();

  React.useEffect(() => {
    LoadData();
  }, [LoadData]);

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
      setCategoryList(categories.filter((c) => c.category_id === categoryId));
      setFacilityList(facilities.filter((f) => f.category_id === categoryId));
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
        <Link className="max-w-xs m-auto" to={MakeUrl(Pages.HomePage)}>
          <div className="max-w-xs m-auto">
            <figure>
              <img src={MakeUrl(APP_LOGO)} alt="رامسر اپ" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center vazir-font">رامسر اپ</h2>
            </div>
          </div>
        </Link>

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
          <FacilityThumb key={facility.id} facility={facility} />
        ))}
      </div>

      <div className="flex flex-wrap justify-evenly">
        {categoryList.map((category) => (
          <CategoryThumb key={category.id} category={category} />
        ))}
      </div>
    </Layout>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  categories: state.data ? state.data.categories : [],
  facilities: state.data ? state.data.facilities : [],
});

const mapDispatchToProps = {
  LoadData: actionCreators.loadData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
