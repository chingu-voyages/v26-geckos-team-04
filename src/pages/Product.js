import React, { useContext } from 'react';
import styled from 'styled-components';
import ProductInformation from '../components/ProductInformation/ProductInformation';
import AddToShoppingCart from '../components/AddToShoppingCart/AddToShoppingCart';
import { ProductContext } from '../contexts/StateProvider';

const ProductPageStyles = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    padding: 20px;

    @media (min-width: 768px) {
        grid-template-columns: 1fr auto;
    }
`

export default function Product({ match }) {

    const {
        params: { productId }
    } = match;

    const products = useContext(ProductContext);

    return (
        <>
        {products && 
            <ProductPageStyles>
                <ProductInformation product={products.find(product => product.id === parseInt(productId))} />
                <AddToShoppingCart product={products.find(product => product.id === parseInt(productId))} />
            </ProductPageStyles>
        }
        </>
    )
}