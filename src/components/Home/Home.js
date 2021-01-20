import React from "react";
import styled from "styled-components";
import carousel1 from "../../assets/carousel-1.jpg";
import carousel2 from "../../assets/carousel-2.jpg";
import carousel3 from "../../assets/carousel-3.jpg";
import carousel4 from "../../assets/carousel-4.jpg";
import carousel5 from "../../assets/carousel-5.jpg";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductPreview from "../ProductPreview/ProductPreview";

const HomeStyles = styled.div`

    display: flex;
    flex-direction: column;
    max-width: 1500px;
    margin: 0 auto;
    background-color: grey;
    

    .carousel {
        margin-bottom: -175px;
        mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.9), rgba(0,0,0,0));
    }

    .product-grid {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        grid-template-rows: 420px;
        grid-gap: 20px;
        padding: 20px;
        justify-items: center;
        box-sizing: border-box;
    }
`;

export default function Home() {

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
                <div>
                    <img src={carousel1} alt="carousel 1" />
                </div>
                <div>
                    <img src={carousel2} alt="carousel 2" />
                </div>
                <div>
                    <img src={carousel3} alt="carousel 3" />
                </div>
                <div>
                    <img src={carousel4} alt="carousel 4" />
                </div>
                <div>
                    <img src={carousel5} alt="carousel 5" />
                </div>
            </Carousel>
            <div className="product-grid">
                <ProductPreview />
                <ProductPreview />
                <ProductPreview />
                <ProductPreview />
                <ProductPreview />
                <ProductPreview />
                <ProductPreview />
                <ProductPreview />
            </div>
            
        </HomeStyles>
    )
}