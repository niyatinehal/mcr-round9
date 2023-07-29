import React, { useState } from "react";
import { categories } from "../db/category";
import { CategoryCard } from "../Components/CategoryCard";

export const Home = () => {
  return (
    <div className="flex flex-wrap">
      {categories.map((category) => (
        <CategoryCard item={category} key={category._id} />
      ))}
    </div>
  );
};
