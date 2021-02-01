import React, { useContext } from 'react';
import styled from 'styled-components';
import ProductInformation from '../components/ProductInformation/ProductInformation';
import AddToShoppingCart from '../components/AddToShoppingCart/AddToShoppingCart';
import { ProductContext } from '../contexts/StateProvider';
import { Link } from "react-router-dom";

const ProductPageStyles = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    padding: 20px;

    @media (min-width: 768px) {
        grid-template-columns: 1fr auto;
    }
`

const ProductErrorPageStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`;

export default function Product({ match }) {

    const {
        params: { productId }
    } = match;

    const products = useContext(ProductContext);
    const currentProduct = products?.find(product => product.id === parseInt(productId));

    return (
        <>
        {currentProduct?
            <ProductPageStyles>
                <ProductInformation product={currentProduct} />
                <AddToShoppingCart product={currentProduct} />
            </ProductPageStyles>
        : <ProductErrorPageStyles>
            <h2>Sorry! The product you are looking for has not been found!</h2>
            <Link to="/">Back to Homepage</Link>
        </ProductErrorPageStyles>}
        </>
    )
}