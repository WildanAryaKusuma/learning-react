import { createContext, useReducer } from "react";

export const TotalPriceContext = createContext(null); // Context untuk state
export const TotalPriceDispatchContext = createContext(null); // Context untuk dispatch

const totalPriceReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE": {
            return {
                total: action.payload.total,
            };
        }
        default:
            throw new Error("Unknown action: " + action.type);
    }
};

export function TotalPriceProvider({ children }) {
    const [totalPrice, dispatch] = useReducer(totalPriceReducer, { total: 0 });

    return (
        <TotalPriceContext.Provider value={totalPrice}>
            <TotalPriceDispatchContext.Provider value={dispatch}>
                {children}
            </TotalPriceDispatchContext.Provider>
        </TotalPriceContext.Provider>
    );
}
