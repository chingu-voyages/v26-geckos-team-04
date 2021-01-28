import React from "react";
import styled from "styled-components";

const ProductPreviewStyles = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    
    h3 {
        font-size: 21px;
    }

    h3, p {
        color: var(--dark-grey);
    }

    img {
        margin: 8px 0;
        align-self: center;
        max-height: 70%;
        width: 100%;
        object-fit: contain;
        flex: 1;
    }
`;

export default function ProductPreview({ image, title }) {

    return (
        <ProductPreviewStyles>
                <h3>Recently viewed</h3>
                <img src={image} alt={title} />
                <p>Shop now</p>
        </ProductPreviewStyles>
    )
}