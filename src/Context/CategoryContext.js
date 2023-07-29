import { createContext, useContext, useState } from "react";

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => useContext(CategoryContext);
export { useCategory, CategoryProvider };
