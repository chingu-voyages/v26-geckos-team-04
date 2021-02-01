import React from 'react';
import styled from 'styled-components';
import CustomizedCheckbox from '../common/CustomizedCheckbox';
import YellowButton from '../common/YellowButton';

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
        <YellowButton text={"Proceed to checkout"} link={"/"} />
    </Container>
  );
}
  
export default ProceedToCheckout;