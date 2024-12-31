import { useContext } from "react";
import { TotalPriceContext } from "../context/TotalPriceContext";

export function useTotalPrice() {
  const context = useContext(TotalPriceContext);
  if (context === undefined) {
    throw new Error("useTotalPrice must be used within a TotalPriceProvider");
  }
  return context;
}
