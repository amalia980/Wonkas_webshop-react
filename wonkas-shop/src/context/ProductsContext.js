import { createContext, useState } from "react";


export const ProductContext = createContext();

const ProductProvider = ({children}) => {

    const [products, setProducts] = useState([
        {
            id: 1,
            title: "candy bar",
            price: "2.5",
            img: "https://images.unsplash.com/photo-1575224300306-1b8da36134ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        },
        {
            id: 2,
            title: "chocolate ice cream",
            price: "4.5",
            img: "https://images.unsplash.com/photo-1575224300306-1b8da36134ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        },
        {
            id: 3,
            title: "chocolate ice cream",
            price: "4.5",
            img: "https://images.unsplash.com/photo-1575224300306-1b8da36134ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        },
        {
            id: 4,
            title: "chocolate ice cream",
            price: "4.5",
            img: "https://images.unsplash.com/photo-1575224300306-1b8da36134ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        },
        {
            id: 5,
            title: "chocolate ice cream",
            price: "4.5",
            img: "https://images.unsplash.com/photo-1575224300306-1b8da36134ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        },
        {
            id: 6,
            title: "chocolate ice cream",
            price: "4.5",
            img: "https://images.unsplash.com/photo-1575224300306-1b8da36134ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        },
        {
            id: 7,
            title: "chocolate ice cream",
            price: "4.5",
            img: "https://images.unsplash.com/photo-1575224300306-1b8da36134ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        },
        {
            id: 8,
            title: "chocolate ice cream",
            price: "4.5",
            img: "https://images.unsplash.com/photo-1575224300306-1b8da36134ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        },
        {
            id: 9,
            title: "chocolate ice cream",
            price: "4.5",
            img: "https://images.unsplash.com/photo-1575224300306-1b8da36134ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        },
        {
            id: 10,
            title: "chocolate ice cream",
            price: "4.5",
            img: "https://images.unsplash.com/photo-1575224300306-1b8da36134ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        },
        {
            id: 11,
            title: "chocolate ice cream",
            price: "4.5",
            img: "https://images.unsplash.com/photo-1575224300306-1b8da36134ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        },
        {
            id: 12,
            title: "chocolate ice cream",
            price: "4.5",
            img: "https://images.unsplash.com/photo-1575224300306-1b8da36134ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        },
    ]);

    return (
        <>
        <ProductContext.Provider value={{products, setProducts}}>
            {children}
        </ProductContext.Provider>
        </>
    )
}

export default ProductProvider;