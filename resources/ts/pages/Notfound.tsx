import React from "react";
import { Link } from "react-router-dom";
import { Pages } from "../shares/URLs";

const Notfound = () => (
    <div>
        <p>صفحه پیدا نشد</p>
        <Link to={Pages.HomePage}>بازگشت به صفحه اصلی</Link>
    </div>
);

export default Notfound;
