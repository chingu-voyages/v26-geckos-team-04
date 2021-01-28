import React, { useContext } from "react";
import styled from "styled-components";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductPreview from "../components/ProductPreview/ProductPreview";
import useWindowWidthState from '../hooks/useWindowWidthState';
import { ProductContext } from '../contexts/StateProvider';
import { Link } from "react-router-dom";

// Carousel images
import carousel1 from "../assets/carousel-1.jpg";
import carousel2 from "../assets/carousel-2.jpg";
import carousel3 from "../assets/carousel-3.jpg";
import carousel4 from "../assets/carousel-4.jpg";
import carousel5 from "../assets/carousel-5.jpg";
import mobileCarousel1 from '../assets/carousel-1-mobile.jpg';
import mobileCarousel2 from '../assets/carousel-2-mobile.jpg';
import mobileCarousel3 from '../assets/carousel-3-mobile.jpg';
import mobileCarousel4 from '../assets/carousel-4-mobile.jpg';

const desktopCarouselImages = [carousel1, carousel2, carousel3, carousel4, carousel5];
const mobileCarouselImages = [mobileCarousel1, mobileCarousel2, mobileCarousel3, mobileCarousel4];

const HomeStyles = styled.div`

    display: flex;
    flex-direction: column;
    max-width: 1500px;
    margin: 0 auto;
    background-color: var(--light-grey-2);
    
    .carousel {
        margin-bottom: 0;
        mask-image: none;
    }

    .product-grid {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        grid-auto-rows: 420px;
        grid-gap: 20px;
        padding: 20px;
        justify-items: center;
        box-sizing: border-box;

        > * {
            box-sizing: border-box;
            background-color: white;
            padding: 10px 20px;
            width: 100%;
            z-index: 2;
            text-decoration: none;
        }
    }

    @media (min-width: 567px) {

        .carousel {
            margin-bottom: -11.5%;
            mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.9), rgba(0,0,0,0));
        }
    }
`;

export default function Home() {

    const windowWidth = useWindowWidthState();
    const products = useContext(ProductContext);

    return (
        <HomeStyles>
            <Carousel 
                className="carousel"
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                autoPlay={true}
                interval={6000}
                infiniteLoop={true}
            >
                {windowWidth > 579 ? desktopCarouselImages.map(image => (
                    <div>
                        <img src={image} alt="carousel banner" />
                    </div>
                )) : mobileCarouselImages.map(image => (
                    <div>
                        <img src={image} alt="mobile carousel banner" />
                    </div>
                ))}
            </Carousel>
            <div className="product-grid">
                {products && products.map(product => (
                    <Link to={`/product/${product.id}`}><ProductPreview key={product.id} image={product.image} title={product.title} /></Link>
                ))}
            </div>
        </HomeStyles>
    )
}