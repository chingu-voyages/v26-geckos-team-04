import { useState } from 'react';
import styled from 'styled-components';
import ProductQuantity from '../common/ProductQuantity';

const ProductContainer = styled.div`
    width: 100%;
    height: auto;
    min-height: 100px;
    margin: 12px 0px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 12px;
`;
const ItemInfo = styled.div`
    position: relative;
    margin-right: 2%;
    width: 100%;
    display: flex;
    align-items: flex-start;
    
`;
const Details = styled.ul`
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
        color: var(--red);
        font-size: 15px;
    }
    &:nth-child(3) {
        color: var(--green);
    }
`;
const Image = styled.a`
    width: 100px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    & img {
        object-fit: cover;
        width: 100px;
        height: 100px;
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
    margin-top: 10px;
`;
const Manipulation = styled.div`
    width: auto;
    margin: 0 5px;
    padding: 8px;
    border: solid 1px #aaa;
    border-radius: 3px;
    font-size: 13px;
    background-image: linear-gradient(to bottom, #fcfcfd 0%, #e7e9ec 100%);
`;

const Link = styled.a`
    font-size: 12px;
    text-decoration: none; //reset
`;


function ShoppingCartProduct(props) {
    //Checkbox from material ui
    const [checked, setChecked] = useState(true);
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
  return (
    <>
        <ProductContainer>
            <ItemInfo>
                <Image href="/">
                    <img src={props.image} alt="item image" />
                </Image>
                <Details>
                    <Detail>
                        <Link href="/" style={{color: "#000", fontSize: "15px"}}>{props.title}</Link>
                    </Detail>
                    <Detail>${props.price}</Detail>
                    <Detail>In Stock</Detail>
                </Details>
            </ItemInfo>
            <Manipulations>
                <ProductQuantity />
                <div style={{display: "flex", marginLeft: "20px"}}>
                    <Manipulation>
                        <Link>Delete</Link>
                    </Manipulation>
                    <Manipulation>
                        <Link>Save for later</Link>
                    </Manipulation>
                </div>
            </Manipulations>
        </ProductContainer>
    </>
  );
}

export default ShoppingCartProduct;