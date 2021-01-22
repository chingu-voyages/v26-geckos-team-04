import { useState, useEffect, createContext } from 'react';

export const ProductsDataContext = createContext();

export function ProductsDataProvider(props) {
    const [data, setData] = useState(null);
    useEffect(() => {
        !(data) && fetch("https://fakestoreapi.com/products/")
            .then(res => res.json())
            .then(res => setData(res))
    }, [])
    return (
        <ProductsDataContext.Provider value={{products: data}}>
            {props.children}
        </ProductsDataContext.Provider>
    )
}


