// import React from 'react';
import styled from 'styled-components';

const CheckoutButton = styled.div`
    text-decoration: none;
    background-image: linear-gradient(to bottom, #faebc8 0%, #f0c14d 100%);
    width: 100%;
    height: 30px;
    border-radius: 3px;
    border: solid 1px #aaa;
    &:hover {
        background-image: linear-gradient(to bottom, #f1e2bf 0%, #e8b93a 100%);
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

function ProceedToCheckout(props) {
  return (
        <CheckoutButton>
            <Link href={props.link}>
                <Text>{props.text}</Text>
            </Link>
        </CheckoutButton>
  );
}
  
export default ProceedToCheckout;