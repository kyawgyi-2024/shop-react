import React from "react";
import { Link } from "react-router-dom";
import carts from "../data/carts";
import Cart from "./Cart";
import Container from "./Container";
import useCartStore from "../store/useCartStore";
import useProductStore from "../store/useProductStore";
import emptycart from "../assets/empty.svg";

const CartSection = () => {
  const { carts } = useCartStore();
  const { products } = useProductStore();

  const total = carts.reduce((pv, cv) => {
    const price = products.find(({ id }) => id === cv.productId).price;
    const cost = cv.quantity * price;
    return pv + cost;
  }, 0);

  const tax = total * 0.05;
  const net = total + tax;
  return (
    <>
      <div className=" flex flex-col gap-5 h-full">
        {carts.length === 0 ? (
          <img src={emptycart} className=" w-[200px] block mx-auto mt-10" alt="empty" />
        ) : (
          carts.map((cart) => <Cart key={cart.id} cart={cart} />)
        )}

        <div className=" absolute bottom-10 left-0 w-full bg-white">
          <Container className="px-5">
            <div className=" border-t border-blue-200 flex justify-end gap-10 py-3">
              <div className=" text-right">
                <p className=" text-slate-600">Total</p>
                <p className=" font-bold text-slate-600">{total.toFixed(2)}</p>
              </div>
              <div className=" text-right">
                <p className=" text-slate-600">Tax(5%)</p>
                <p className=" font-bold text-slate-600">{tax.toFixed(2)}</p>
              </div>
              <div className=" text-right">
                <p className=" text-slate-600">Net Total</p>
                <p className=" text-2xl font-bold text-slate-600">
                  {net.toFixed(2)}
                </p>
              </div>
            </div>
            <div className=" text-end mb-3 transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-100 ">
              <Link className=" hover:bg-blue-400 active:bg-blue-400 duration-200 border border-blue-200 text-slate-600 rounded-md px-4 py-2">
                Order Now
              </Link>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default CartSection;
