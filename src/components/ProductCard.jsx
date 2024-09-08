import React from "react";
import Rating from "./Rating";
import Container from "./Container";
import { Link, useNavigate } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import toast from "react-hot-toast";
// import  carts  from '../data/carts'

const ProductCard = ({
  product: {
    id,
    title,
    price,
    image,
    rating: { rate },
  },
}) => {
  const { carts, addCart } = useCartStore();
  const navigate = useNavigate()

  const handleAddedCartBtn = (event) => {
    event.stopPropagation()
    toast.error("Item is already added.")
  }
  const handleAddCartBtn = (event) => {
    event.stopPropagation();

    const newCart = {
      id: Date.now(),
      productId: id,
      quantity: 1,
    };
    addCart(newCart);
  };

  const handleOpenDetail  = () => {
    navigate(`/product-detail/${id}`)
  }
  return (
    <div
      onClick={handleOpenDetail}
      className=" border border-blue-200 rounded-lg p-5 flex flex-col  items-start gap-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 "
    >
      <img src={image} className=" h-40" alt="" />
      <p className=" font-bold line-clamp-2 text-slate-600">{title}</p>
      <Rating rate={rate} />
      <div className=" flex justify-between items-end w-full ">
        <p className=" text-slate-600">${price.toFixed(2)}</p>
        {carts.find((cart) => cart.productId === id) ? (
          <button onClick={handleAddedCartBtn} className=" text-sm border border-blue-200 bg-blue-200 rounded-md text-slate-600 px-3 py-1">
            Added
          </button>
        ) : (
          <button
            onClick={handleAddCartBtn}
            className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 active:bg-blue-200 duration-200 text-slate-600 text-sm border border-blue-200 rounded-md px-3 py-1"
          >
            Add Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
