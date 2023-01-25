import { createContext, useState } from "react";


export const ProductContext = createContext();

const ProductProvider = ({children}) => {

    const [products, setProducts] = useState([]);

    const [cartItems, setCartItems] = useState([]);

    return (
        <>
        <ProductContext.Provider value={{products, setProducts, cartItems, setCartItems}}>
            {children}
        </ProductContext.Provider>
        </>
    )
}

export default ProductProvider;