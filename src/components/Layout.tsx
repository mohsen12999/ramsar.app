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
            <Link to={process.env.PUBLIC_URL + Pages.HomePage}>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="inline-block w-6 h-6 ml-2"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
              </svg>
              صفحه نخست
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + Pages.About}>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="inline-block w-6 h-6 ml-2"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"></path>
              </svg>
              درباره ما
            </Link>
          </li>
          <li>
            <a href="#">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="inline-block w-6 h-6 ml-2"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path>
              </svg>
              نصب برنامه
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </React.Fragment>
);

export default Layout;
