import React from 'react';
import styled from 'styled-components';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShopIcon from '@material-ui/icons/Shop';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LockIcon from '@material-ui/icons/Lock';

const AddToShoppingCartStyles = styled.div`
   min-width: 250px;
   max-height: 400px;
   padding: 18px;
   display: flex;
   flex-direction: column;
   border: 1px solid var(--light-grey-2);
   border-radius: 5px;

   > * {
       margin: 5px 0;
   }

   .price-primary {
       font-size: 18px;
       color: var(--red);
   }

   .price-secondary {
       color: var(--light-grey-1);
   }

   .details-value {
       font-weight: bold;
   }

   .stock-status {
       font-size: 18px;
       color: var(--green);
   }

   button {
       border-radius: 3px;
       border: solid 0.5px;
       padding: 3px;
       display: flex;
       align-items: center;
       justify-content: center;
       min-height: 36px;

       :hover {
           cursor: pointer;
           opacity: 0.8;
       }

       .icon {
           color: white;
           background-color: black;
           padding: 2px;
           border-radius: 3px;
       }

       .text {
           flex: 1;
       }
   }

   .cart-button {
        background-color: var(--orange-1);
        border-color: #a88734 #9c7e31 #846a29;
   }

   .buy-button {
        background-color: var(--orange-2);
        border-color: #ca7c1b #be751a #a56616;
   }

   .secure-details,
   .deliver-details {
       display: flex;
       align-items: center;
       color: var(--light-grey-1);

       .icon {
           padding-right: 5px;
       }
   }
`;

export default function AddToShoppingCart() {
    return (
        <AddToShoppingCartStyles>
            <div className="price">
                <div className="price-primary">$50.68</div>
                <div className="price-secondary">+ $23.58 Delivery</div>
            </div>
            <div><span className="details-key">Arrives: </span><span className="details-value">4 - 8 Feb</span></div>
            <div><span className="details-key">Fastest delivery: </span><span className="details-value">27 - 29 Jan</span></div>
            <div className="stock-status">In stock.</div>
            <button className="cart-button"><AddShoppingCartIcon className="icon"/><span className="text">Add to Cart</span></button>
            <button className="buy-button"><ShopIcon className="icon"/><span className="text">Buy Now</span></button>
            <div className="secure-details"><LockIcon fontSize="small" className="icon"/><span>Secure transaction</span></div>
            <div>
                <div>Ships from: Amazon US</div>
                <div>Sold by: Amazon US</div>
            </div>
            <div className="deliver-details"><LocationOnIcon fontSize="small" className="icon"/><span>Deliver to North Epping 2121</span></div>
            <button>Add to Wish List</button>
        </AddToShoppingCartStyles>
    )
}