import React, { createContext, useContext, useReducer } from 'react';

// Crear el contexto
const CartContext = createContext();

// Reducer para manejar acciones en el carrito
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const { instanceId, quantity } = action.payload;
            // Buscar el producto con el mismo instanceId
            const existingProductIndex = state.findIndex(item => item.instanceId === instanceId);

            if (existingProductIndex >= 0) {
                // Actualizar cantidad del producto existente
                const updatedState = [...state];
                updatedState[existingProductIndex] = {
                    ...updatedState[existingProductIndex],
                    quantity: updatedState[existingProductIndex].quantity + quantity
                };
                return updatedState;
            } else {
                // Agregar nuevo producto al carrito
                return [...state, action.payload];
            }
        case 'REMOVE_FROM_CART':
            // Lógica para remover del carrito
            return state.filter(item => item.instanceId !== action.payload.instanceId);
        case 'CLEAR_CART':
            return [];
        default:
            return state;
    }
};

// Proveedor del contexto
export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, []);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

// Hook para usar el contexto del carrito
export const useCart = () => useContext(CartContext);
