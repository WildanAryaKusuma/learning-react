import { createContext, useContext, useReducer } from "react";

const TotalPriceContext = createContext(null) // nyimpen state
const TotalPriceDispatchContext = createContext(null) // nyimpen actionnya

const totalPriceReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE': {
            return {
                total: action.payload.total
            }
        }
        default:
            throw Error('Unknown Action' + action.type)
    }
}

export function TotalPriceProvider({children}) { 
    // * param pertama dari useReducer adalah reducer nya itu sendiri
    // * param kedua adalah default initial state nya
    const [totalPrice, dispatch] = useReducer(totalPriceReducer, {total: 0 })

    return (
        <TotalPriceContext.Provider value={totalPrice}>
            <TotalPriceDispatchContext.Provider value={dispatch}>
                {children}
            </TotalPriceDispatchContext.Provider>
        </TotalPriceContext.Provider>
    )
}

export function useTotalPrice() {
    return useContext(TotalPriceContext)
}

export function useTotalPriceDispatch() {
    return useContext(TotalPriceDispatchContext)
}
