import React from "react";
import styled from "styled-components";
import sampleImage from "../../assets/sample-preview.jpg"

const ProductPreviewStyles = styled.div`

    box-sizing: border-box;
    background-color: white;
    padding: 10px 20px;
    width: 100%;
    z-index: 2;
    display: flex;
    flex-direction: column;

    h3 {
        font-size: 21px;
    }

    img {
        margin: 8px 0;
        align-self: center;
    }
`;

export default function ProductPreview() {

    return (
        <ProductPreviewStyles>
            
            <h3>Recently viewed</h3>
            <img src={sampleImage} alt="product" />
            <p>Shop now</p>
            
        </ProductPreviewStyles>
    )
}