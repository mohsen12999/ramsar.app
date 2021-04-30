import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { MakeUrl, Pages } from "../shares/URLs";

const Notfound = () => (
  <Layout>
    <div className="hero bg-base-200 main">
      <p>صفحه پیدا نشد</p>
      <Link to={MakeUrl(Pages.HomePage)}>بازگشت به صفحه اصلی</Link>
    </div>
  </Layout>
);

export default Notfound;
