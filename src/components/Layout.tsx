import React from "react";
import { Link } from "react-router-dom";
import { Pages } from "../shares/URLs";

// TODO: upload data at start (status = init)
const Layout: React.FC = ({ children }) => (
  <div className="rounded-lg shadow bg-base-200 drawer h-screen">
    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
    <div className="flex flex-col drawer-content">
      <div className="w-full navbar mb-2 bg-base-300">
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
        </div>
        <div className="flex-1 px-2 mx-2 items-center">
          <div className="form-control">
            <input
              type="text"
              placeholder="جستجو"
              className="input input-ghost search-input"
            />
          </div>
        </div>
        <div className="flex-none hidden lg:block">
          <ul className="menu horizontal">
            <li>
              <Link
                to={process.env.PUBLIC_URL + Pages.HomePage}
                className="rounded-btn"
              >
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="inline-block w-5 ml-2"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                صفحه نخست
              </Link>
            </li>
            <li>
              <Link
                to={process.env.PUBLIC_URL + Pages.Faq}
                className="rounded-btn"
              >
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 ml-2"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path>
                </svg>
                سوالات متداول
              </Link>
            </li>
            <li>
              <Link
                to={process.env.PUBLIC_URL + Pages.About}
                className="rounded-btn"
              >
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 ml-2"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                </svg>
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
          <Link to={process.env.PUBLIC_URL + Pages.HomePage}>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="inline-block w-5 ml-2"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            صفحه نخست
          </Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + Pages.Faq}>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="inline-block w-5 ml-2"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path>
            </svg>
            سوالات متداول
          </Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + Pages.About}>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="inline-block w-5 ml-2"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
            </svg>
            درباره ما
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Layout;
