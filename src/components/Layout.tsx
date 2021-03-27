import React from "react";
import { Link } from "react-router-dom";
import { Pages } from "../shares/URLs";

// TODO: upload data at start (status = init)
const Layout: React.FC = ({ children }) => (
  <div className="rounded-lg shadow bg-base-200 drawer h-screen">
    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
    <div className="flex flex-col drawer-content">
      <div className="w-full navbar bg-base-300">
        <div className="flex-none lg:hidden">
          <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex-1 px-2 mx-2 items-center">
          <span className="text-lg font-bold">رامسر اپ</span>
          <div className="form-control">
            <input
              type="text"
              placeholder="جستجو"
              className="input input-ghost"
            />
          </div>
        </div>
        <div className="flex-none hidden lg:block">
          <ul className="menu horizontal">
            <li>
              <Link to={Pages.HomePage} className="rounded-btn">
                صفحه نخست
              </Link>
            </li>
            <li>
              <Link to={Pages.Faq} className="rounded-btn">
                سوالات متداول
              </Link>
            </li>
            <li>
              <Link to={Pages.About} className="rounded-btn">
                درباره ما
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <main>{children}</main>
    </div>
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
      <ul className="p-4 overflow-y-auto menu w-80 bg-base-100">
        <li>
          <Link to={Pages.HomePage}>صفحه نخست</Link>
        </li>
        <li>
          <Link to={Pages.Faq}>سوالات متداول</Link>
        </li>
        <li>
          <Link to={Pages.About}>درباره ما</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Layout;
