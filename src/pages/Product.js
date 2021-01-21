import React from 'react';
import styled from 'styled-components';
import ProductInformation from '../components/ProductInformation/ProductInformation';
import AddToShoppingCart from '../components/AddToShoppingCart/AddToShoppingCart';

const ProductPageStyles = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    padding: 20px;

    @media (min-width: 768px) {
        grid-template-columns: 1fr auto;
    }
`

export default function Product() {
    return (
        <ProductPageStyles>
            <ProductInformation />
            <AddToShoppingCart />
        </ProductPageStyles>
    )
}