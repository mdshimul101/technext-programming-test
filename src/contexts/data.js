import { createContext, useState } from "react";

const filterContext = createContext();

const FilterDataProvider = (props) => {
  const [filterData, setFilterData] = useState({});
  return (
    <filterContext.Provider value={{ filterData, setFilterData }}>
      {props.children}
    </filterContext.Provider>
  );
};

export { filterContext, FilterDataProvider };
