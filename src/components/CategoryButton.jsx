import React from "react";
import useCategoryStore from "../store/useCategoryStore";

const CategoryButton = ({ category: { id, name, isActive } }) => {
  const { activeCategory } = useCategoryStore();

  const handleActive = () => {
    activeCategory(id);
  };
  return (
    <button
      onClick={handleActive}
      className={`${
        isActive && "bg-blue-300 text-slate-600"
      } m-1 mt-2 transition ease-in-out delay-150 hover:-translate-x-0.5 hover:scale-100 border text-nowrap border-blue-200 px-4 py-2 me-2 category-button rounded-md text-slate-600  hover:bg-blue-200 active:bg-blue-300 duration-200`}
    >
      {name}
    </button>
  );
};

export default CategoryButton;
