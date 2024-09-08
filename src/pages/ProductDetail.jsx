import React from "react";
import { useParams } from "react-router-dom";
// import products from "../data/products";
import Container from "../components/Container";
import Rating from "../components/Rating";
import BreadCrumb from "../components/BreadCrumb";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";
import toast from "react-hot-toast";

const ProductDetail = () => {
  const { productId, id } = useParams();

  const { products } = useProductStore();
  const { carts, addCart } = useCartStore();

  const currentProduct = products.find((product) => product.id == productId);

  const handleAdded = (event) => {
    event.stopPropagation();
    toast.error("Product is Already.");
  };
  const handleAddCart = (event) => {
    event.stopPropagation();
    const newCart = { id: Date.now(), productId: parseInt(id), quantity: 1 };
    addCart(newCart);
  };
  const isAddedToCart = carts?.some((el) => el.productId === parseInt(id));
  return (
    <Container className="mb-auto px-5">
      <BreadCrumb currentPageTitle="Product Detail" />
      <div className=" border border-blue-200 p-10 rounded-md ">
        <div className=" grid grid-cols-1 md:grid-cols-2">
          <div className=" col-span-1">
            <img
              src={currentProduct.image}
              className="h-[200px] md:w-3/4 lg:w-52 lg:h-auto mb-5 md:mb-0 block mx-auto"
              alt=""
            />
          </div>
          <div className=" col-span-1 flex flex-col items-start gap-5">
            <h3 className=" text-3xl font-bold ">{currentProduct.title}</h3>
            <p className=" bg-blue-200 rounded-md text-slate-600 inline-block px-5 py-1">
              {currentProduct.category}
            </p>
            <p>{currentProduct.description}</p>
            <Rating rate={currentProduct.rating.rate} />
            <div className=" flex justify-between w-full items-center">
              <p className=" text-slate-600">
                Price : (${currentProduct.price.toFixed(2)}){" "}
              </p>
              {/* <button onClick={handleAddCartBtn} className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 text-sm border border-blue-200 text-slate-600 rounded-md hover:bg-blue-400 active:bg-blue-400 duration-200 px-3 py-1">
                Add Cart
              </button> */}
              {isAddedToCart ? (
                <button
                  onClick={handleAdded}
                  className=" text-nowrap text-sm shadow-md text-white transition-all duration-150  rounded-md py-2 px-4 capitalize bg-teal-900 active:scale-90 "
                >
                  Added
                </button>
              ) : (
                <button
                  onClick={handleAddCart}
                  className=" text-nowrap text-sm shadow-md text-white transition-all duration-150  rounded-md py-2 px-4 capitalize bg-teal-600 hover:bg-teal-400 active:scale-90 "
                >
                  Add Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
