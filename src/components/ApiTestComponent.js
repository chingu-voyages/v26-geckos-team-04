import { ProductsDataContext } from "../contexts/ProductsDataProvider";
import { useContext } from 'react';

function TestComponent() {
    const data = useContext(ProductsDataContext);
    return (
        <>
        {!data.products ? (
            <div>loading...</div>
        ) : (
            <div>{data.products[0].title}</div>
        )}
        </>
    )
}

export default TestComponent;