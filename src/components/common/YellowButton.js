import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CheckoutButton = styled.button`
    text-decoration: none;
    background-image: linear-gradient(to bottom, #faebc8 0%, #f0c14d 100%);
    width: 100%;
    height: 35px;
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
const LinkStyle = styled.a`
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: block;
    &:hover {
        pointer: cursor;
    }
`;

function ProceedToCheckout(props) {
    console.log(props?.disabledCondition)
  return (
        <CheckoutButton disabled={props.disabledCondition ? props.disabledCondition : false}>
            <LinkStyle>
                {props.disabledCondition ? (
                    <Link style={{textDecoration: 'none'}}>
                        <Text>{props.text}</Text>
                    </Link>
                ) : (
                    <Link to={props.link} style={{textDecoration: 'none'}}>
                        <Text>{props.text}</Text>
                    </Link>
                )}
            </LinkStyle>
        </CheckoutButton>
  );
}
  
export default ProceedToCheckout;