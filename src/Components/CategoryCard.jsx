import React from "react";
import { useCategory } from "../Context/CategoryContext";
import { Navigate, useNavigate } from "react-router-dom";

export const CategoryCard = ({ item }) => {
  const { thumbnail, category } = item;
  const { setSelectedCategory } = useCategory();
  const nav=useNavigate()
  return (
    <div
      className="flex p-3 m-2 flex-col cursor-pointer"
      onClick={() => {
        setSelectedCategory(category);
       nav("/explore")
      }}
    >
      <img src={thumbnail} className="h-40" />
      <div className="text-left text-xl font-medium">{category}</div>
    </div>
  );
};
