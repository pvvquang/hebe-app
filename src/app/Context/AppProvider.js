import React, { createContext, useState } from "react";

export const AppContext = createContext();

function AppProvider({ children }) {
  const [unit, setUnit] = useState("USD");
  const [showCouponCode, setShowCouponCode] = useState(true);
  const [filters, setFilters] = useState({});
  const [sortPrice, setSortPrice] = useState("");
  const [sortMimax, setSortMimax] = useState([]);

  return (
    <AppContext.Provider
      value={{
        unit,
        setUnit,
        showCouponCode,
        setShowCouponCode,
        filters,
        setFilters,
        sortPrice,
        setSortPrice,
        sortMimax,
        setSortMimax,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
