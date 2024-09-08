import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className=" w-full h-screen flex justify-center items-center bg-slate-200">
      <div className=" text-center ">
        <div className=" flex justify-center items-center space-x-5">
          <h1 className=" text-5xl font-bold mb-3 text-slate-600">
            404
            
          </h1>
          <span className=" text-slate-600 mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.181 8.68a4.503 4.503 0 0 1 1.903 6.405m-9.768-2.782L3.56 14.06a4.5 4.5 0 0 0 6.364 6.365l3.129-3.129m5.614-5.615 1.757-1.757a4.5 4.5 0 0 0-6.364-6.365l-4.5 4.5c-.258.26-.479.541-.661.84m1.903 6.405a4.495 4.495 0 0 1-1.242-.88 4.483 4.483 0 0 1-1.062-1.683m6.587 2.345 5.907 5.907m-5.907-5.907L8.898 8.898M2.991 2.99 8.898 8.9"
                />
              </svg>
            </span>
        </div>
        <p className=" w-96 mb-5 text-slate-600">
          This page isn't available. Sorry about that.
        </p>
        <div className=" transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-100">
          <Link
            to={"/"}
            className="duration-200 px-4 py-2 border border-blue-200 text-slate-600 rounded-md hover:bg-blue-400 active:bg-blue-400 text-sm"
          >
            Back to home{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
