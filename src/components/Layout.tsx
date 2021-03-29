import React from "react";
import { Link } from "react-router-dom";
import { Pages } from "../shares/URLs";

// TODO: upload data at start (status = init)
const Layout: React.FC = ({ children }) => (
  <React.Fragment>
    <main>{children}</main>
    <footer>
      <div className="py-4 flex">
        <ul className="menu items-stretch px-3 shadow-lg bg-base-100 bg-neutral-focus horizontal rounded-box m-auto vazir-font">
          <li>
            <Link to={process.env.PUBLIC_URL + Pages.HomePage}>صفحه نخست</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + Pages.Register}>
              ثبت مکان جدید
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + Pages.About}>درباره ما</Link>
          </li>
        </ul>
      </div>
    </footer>
  </React.Fragment>
);

export default Layout;
