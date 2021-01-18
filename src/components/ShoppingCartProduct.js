import { useState } from 'react';
import styled from 'styled-components';
import CustomizedCheckbox from './CustomizedCheckbox';

const data = [
    {
       "id":1,
       "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
       "price":109.95,
       "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
       "category":"men clothing",
       "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    },
    {
       "id":2,
       "title":"Mens Casual Premium Slim Fit T-Shirts ",
       "price":22.3,
       "description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
       "category":"men clothing",
       "image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
    },
    {
       "id":3,
       "title":"Mens Cotton Jacket",
       "price":55.99,
       "description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
       "category":"men clothing",
       "image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
    }
];


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
    width: auto;
    border: solid 2px yellow;
`;
const ItemPrice= styled.div`
    float: right;
    font-size: 18px;
    font-weight: 600;
    line-height: 2.5;
`;
const Details = styled.ul`
    padding-left: 180px;
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
const Title = styled.a`
    font-size: 18px;
    line-height: 1.6;
    color: var(--dark-green);
    font-weight: 600;
    text-decoration: none; //reset
    &:hover {
        color: var(--red);
        text-decoration: underline;
    }
`;
const Image = styled.a`
    width: 180px;
    margin-left: -220px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    & img {
        object-fit: cover;
        width: 180px;
        height: 180px;
    }
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

const Anchor = styled.a`
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


function ShoppingCartProduct() {
    //Checkbox from material ui
    const [checked, setChecked] = useState(true);
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
  return (
    <div style={{margin: "100px", border: "solid 1px red"}}>
        <ProductContainer style={{border: "solid 1px green"}}>
                <ItemInfo>
                    <Image href="/">
                        <CustomizedCheckbox onClick={handleChange} style={{transform: "scale(1.2)"}}/>
                        <img src={data[0].image} alt="item image" />
                    </Image>
                    <Details>
                        <Detail>
                            <Anchor href="/" style={{lineHeight: "1.6", fontWeight: "600", fontSize: "18px"}}>OneOdio Over Ear Headphone, Wired Bass Headsets with 50mm Driver, Foldable Lightweight Headphones with Shareport and Mic for Recording Monitoring Mixing Podcast Guitar PC TV - (Grey)</Anchor>
                        </Detail>
                        <Detail>In Stock</Detail>
                        <Detail>
                            <CustomizedCheckbox onClick={handleChange}/>
                            This is a gift
                            <Anchor href="/" style={{marginLeft: "4px"}}>Learn more</Anchor>
                        </Detail>
                    </Details>
                    <Manipulations>
                        <Divider />
                        <Manipulation>
                            <Anchor>Delete</Anchor>
                        </Manipulation>
                        <Divider />
                        <Manipulation>
                            <Anchor>Save for later</Anchor>
                        </Manipulation>
                        <Divider />
                        <Manipulation>
                            <Anchor>Compare with similar items</Anchor>
                        </Manipulation>
                    </Manipulations>
                </ItemInfo>
                <ItemPrice>${data[0].price}</ItemPrice>
        </ProductContainer>
    </div>
  );
}

export default ShoppingCartProduct;