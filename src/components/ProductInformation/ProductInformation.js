import React from 'react';
import styled from 'styled-components';
import sampleProductPhoto from '../../assets/stuffed-shiba.jpg';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';

const ProductInformationStyles = styled.div`

    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;

    @media (min-width: 992px) {
        grid-template-columns: 1fr 1fr;
    }

    hr {
        display: block;
        height: 1px;
        border-width: 0;
        border-top: 1px solid var(--light-grey-2);
        margin: 10px 0;
    }

    .product-photo {
        max-width: 100%;
    }

    .product-rating {
        color: var(--orange);
    }

    .product-details-list {
        list-style: none;
        padding: 0;

        .product-details-key {
            color: var(--light-grey-1);
        }

        .product-details-price {
            color: var(--red);
            padding-left: 10px;
            font-size: 1.3em;
        }

        .product-details-value {
            font-weight: bold;
            padding-left: 10px;
        }
    }

    ul {
        padding-left: 15px;
    }

`;

export default function ProductInformation() {
    return (
        <ProductInformationStyles>
            <div className="product-left">
                <img src={sampleProductPhoto} alt="Product" className="product-photo" />
            </div>
            <div className="product-right">
                <h2>Stuffed Animal Shiba Inu, Large Adorable Japanese Anime Corgi plushie, Soft Cute squeezable Cushion Pillow, Kawaii Home décor , Perfect for Cuddling, Great for Stress Relief and Concentration</h2>
                <div className="product-rating"><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarHalfIcon /></div>
                <hr />
                <ul className="product-details-list">
                    <li><span className="product-details-key">Price:</span><span className="product-details-price">$34.98</span></li>
                    <li><span className="product-details-key">Color:</span><span className="product-details-value">Brown</span></li>
                    <li><span className="product-details-key">Size:</span><span className="product-details-value">Large</span></li>
                    <li><span className="product-details-key">Brand:</span><span className="product-details-value">Squishy Dot</span></li>
                    <li><span className="product-details-key">Material:</span><span className="product-details-value">Plush</span></li>
                    <li><span className="product-details-key">Number of Pieces:</span><span className="product-details-value">1</span></li>
                </ul>
                <hr />
                <h3>About this item</h3>
                <ul className="product-about-list">
                    <li>Please give this cute Shiba Inu a warm welcome massage when you first receive it. Due to the delivery process, it may be pressed into a slightly different shape.</li>
                    <li>FUN FOR THE WHOLE FAMILY: The softness and squishy sensation brings comfort, enjoyment and calm to everyone by simply cuddling it.</li>
                    <li>THE PERFECT GIFT FOR ALL AGES: A great Christmas, thanksgiving, Easter, valentines and birthday gift!</li>
                </ul>
            </div>
        </ProductInformationStyles>
    )
}