import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({ currentPageTitle }) => {
  return (
    <div className=" w-full flex gap-2 mb-5">
      <Link to={"/"} className=" text-slate-400 transition ease-in-out delay-150 hover:-translate-x-0.5 hover:text-slate-500 active:text-slate-500">
        Home
      </Link>
      <span className=" text-slate-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9 20.247 6-16.5"
          />
        </svg>
      </span>
      <p className=" text-slate-600">{currentPageTitle}</p>
    </div>
  );
};

export default BreadCrumb;
