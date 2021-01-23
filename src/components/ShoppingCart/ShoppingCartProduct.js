import { useState } from 'react';
import styled from 'styled-components';
import CustomizedCheckbox from './CustomizedCheckbox';
import DropdownQuantity from './DropdownQuantity';

const ProductContainer = styled.div`
    width: 100%;
    height: auto;
    min-width: 642px;
    min-height: 180px;
    margin: 12px 0;
    &:after {
        content: "";
        clear: both;
        display: table;
    }
    &:before {
        content: "";
    }
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;
const ItemInfo = styled.div`
    position: relative;
    margin-right: 2%;
    float: left;
    margin-left: 220px;
    width: 100%;
    // @media screen and (max-width: 579px) {
    //     margin-left: 130px;
    // }
`;
const ItemPrice= styled.div`
    float: right;
    font-size: 18px;
    font-weight: 600;
    line-height: 2;
`;
const Details = styled.ul`
    // padding-left: 220px;
    width: 100%;
    list-style: none; //reset
    padding: 0; //reset
    margin: 0; //reset
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
`;
const Detail = styled.li`
    width: 100%;
    font-size: 12px;
    margin: 2px 0;
    &:nth-child(2) {
        color: var(--green);
    }
`;
const Image = styled.div`
    width: 180px;
    margin-left: -210px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    & img {
        object-fit: cover;
        width: 180px;
        height: 180px;
    }
    // @media screen and (max-width: 579px) {
    //     width: 100px;
    //     margin-left: -130px;
    //     & img {
    //         width: 100px;
    //         height: 100px;
    //     }
    // }
    &:hover {
        cursor: pointer;
    }
    
`;
const Manipulations = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
`;
const Manipulation = styled.div`
    width: auto;
`;

const Link = styled.a`
    font-size: 12px;
    color: var(--dark-green);
    text-decoration: none; //reset
    &:hover {
        color: var(--red);
        text-decoration: underline;
        cursor: pointer;
    }
`;
const Divider = styled.div`
    margin: 10px;
    width: 1px;
    background: #ddd;
    height: 14px;
`;


function ShoppingCartProduct(props) {
    //Checkbox from material ui
  return (
    <>
        <ProductContainer>
                <ItemInfo>
                    <Image>
                        <div style={{marginRight: "5px"}}>
                            <CustomizedCheckbox />
                        </div>
                        <a href="/">
                            <img src={props.image} alt="item image" />
                        </a>
                    </Image>
                    <Details>
                        <Detail>
                            <Link href="/" style={{lineHeight: "1.6", fontWeight: "600", fontSize: "18px"}}>{props.title}</Link>
                        </Detail>
                        <Detail>In Stock</Detail>
                        <Detail style={{display: "flex", margin: "8px 0"}}>
                            <CustomizedCheckbox />
                            <div style={{marginLeft: "5px"}}>This is a gift</div>
                            <Link href="/" style={{marginLeft: "4px"}}>Learn more</Link>
                        </Detail>
                    </Details>
                    <Manipulations>
                        <DropdownQuantity />
                        <Divider />
                        <Manipulation>
                            <Link>Delete</Link>
                        </Manipulation>
                        <Divider />
                        <Manipulation>
                            <Link>Save for later</Link>
                        </Manipulation>
                        <Divider />
                        <Manipulation>
                            <Link>Compare with similar items</Link>
                        </Manipulation>
                    </Manipulations>
                </ItemInfo>
                <ItemPrice>${props.price}</ItemPrice>
        </ProductContainer>
    </>
  );
}

export default ShoppingCartProduct;