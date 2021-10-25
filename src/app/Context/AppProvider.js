import React, { createContext, useState } from "react";

export const AppContext = createContext();

function AppProvider({ children }) {
  const [unit, setUnit] = useState("USD");
  const [showCouponCode, setShowCouponCode] = useState(true);
  const [filters, setFilters] = useState({});

  return (
    <AppContext.Provider
      value={{
        unit,
        setUnit,
        showCouponCode,
        setShowCouponCode,
        filters,
        setFilters,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
