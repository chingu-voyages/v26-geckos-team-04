// import React from 'react';
import styled from 'styled-components';
import CustomizedCheckbox from './CustomizedCheckbox';

const Container = styled.section`
    width: 260px;
    height: auto;
    background: #fff;
    padding: 20px;
    padding-bottom: 30px;
    @media screen and (max-width: 579px) {
        box-sizing: border-box;
        width: 100%;
    }
`;
const Subtotal = styled.div`
    width: 100%;
    text-align: left;
    font-size: 18px;
    line-height: 1.5;
`;
const Gift = styled.div`
    width: 100%;
    text-align: left;
    color: #0f1111;
    font-size: 14px;
    display: flex;
    margin: 8px 0;
`;
const CheckoutButton = styled.div`
    text-decoration: none;
    background-image: linear-gradient(to bottom, #faebc8 0%, #f0c14d 100%);
    width: 258px;
    height: 30px;
    border-radius: 3px;
    border: solid 1px #aaa;
    &:hover {
        background-image: linear-gradient(to bottom, #f1e2bf 0%, #e8b93a 100%);
    }
    @media screen and (max-width: 579px) {
        width: 100%;
        max-width: 350px;
    }
`;
const Text = styled.div`
    width: 100%;
    height: 100%;
    color: #111;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: auto;
`;
const Link = styled.a`
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: block;
    &:hover {
        pointer: cursor;
    }
`;

function ProceedToCheckout() {
    const num = 5;
    const itemsText = (num) => {
        if (num > 1) {
            return "items"
        } else if (num === 1) {
            return "item"
        }
    }
    const dollar = 223.1;
  return (
    <Container>
        <Subtotal>
            Subtotal ({num} {itemsText(num)}): 
            <span style={{fontWeight: "600"}}> ${dollar.toFixed(2)}</span>
        </Subtotal>
        <Gift>
            <CustomizedCheckbox />
            <div style={{marginLeft: "5px"}}>This order contains a gift</div>
        </Gift>
        <CheckoutButton>
            <Link href="/">
                <Text>Proceed to checkout</Text>
            </Link>
        </CheckoutButton>
    </Container>
  );
}
  
export default ProceedToCheckout;