import { useContext } from "react";
import { TotalPriceDispatchContext } from "../context/TotalPriceContext";

export function useTotalPriceDispatch() {
  const context = useContext(TotalPriceDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useTotalPriceDispatch must be used within a TotalPriceProvider"
    );
  }
  return context;
}
