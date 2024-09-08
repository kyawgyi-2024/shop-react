import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";

const Header = () => {
  const {carts} = useCartStore()
  return (
    <header className=" px-5 py-5 mb-5">
      <Container>
        <div className=" flex justify-between items-center text-slate-500 font-mono rounded-md">
          <Link to={"/"} className="text-2xl font-medium flex transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-100 hover:text-slate-700 active:text-slate-700">
            <div className=" flex space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <h1>Shop</h1>
            </div>
            
          </Link>

          <Link
            to={"/my-cart"}
            className=" flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 border border-slate-400 px-5 py-1 relative rounded-md  hover:bg-blue-300 active:bg-blue-300 duration-200"
          >
            
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
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            Cart
            
            <span className=" animate-bounce rounded-xl absolute -top-1 -right-1 translate-x-1/2 -translate-y-1/2 inline-block text-xs bg-red-500 text-slate-300 px-3 py-1">
              {carts.length}
            </span>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
