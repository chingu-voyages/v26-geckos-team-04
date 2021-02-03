import ShoppingCartProduct from './ShoppingCartProduct';
import ShoppingCartProductSp from './ShoppingCartProductSp';
import styled from 'styled-components';
import useWindowWidthState from '../../hooks/useWindowWidthState';
import { useStateValue } from '../../contexts/StateProvider';
import useBasketTotal from '../../hooks/useBasketTotal';
  
const Cart = styled.section`
    padding: 20px;
    padding-bottom: 30px;
    background: #fff;
    @media screen and (max-width: 579px) {
        padding: 0;
    }
`;
const Top = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: aling-items;
    flex-direction: column;
    padding-bottom: 2px;
    border-bottom: solid 1px #ddd;
`;
const Title = styled.div`
    font-size: 28px;
    color: #0f1111;
    line-height: 1.5;
`;

const Link = styled.a`
    font-size: 14px;
    color: var(--dark-green);
    text-decoration: none; 
    &:hover {
        color: var(--red);
        text-decoration: underline;
        cursor: pointer;
    }
`;
const PriceTag = styled.div`
    width: 100%;
    text-align: right;
    font-size: 14px;
    color: #565959;
`;
const ProductContainer = styled.div`
    margin: 12px 0;
    border-bottom: solid 1px #ddd;
`;
const Subtotal = styled.div`
    width: 100%;
    text-align: right;
    font-size: 18px;
`;

function ShoppingCartList({products}) {
    const num = products.length;
    const windowWidth = useWindowWidthState();
    const [{ basket, user }, dispatch] = useStateValue();
    const subtotal = useBasketTotal();
    //Add firebase with useEffect later...
    const removeFromBasket = (id) => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    const setQuantity = (id, n) => {
        dispatch({
            type: 'SET_QUANTITY',
            id: id,
            quantity: n
        })
    }
    return (
        <Cart>
            { windowWidth > 579 ? (
                <Top>
                    <Title>Shopping Cart</Title>
                    <Link>Deselect all items</Link>
                    <PriceTag>Price</PriceTag>
                </Top>
            ) : ("")}
            { windowWidth > 579 ? (
                products.map((d, i) => {
                    return (
                        <ProductContainer key={i}>
                            <ShoppingCartProduct 
                                product={products[i]}
                                remove={() => removeFromBasket(products[i].id)}
                            />
                        </ProductContainer>
                    )
                })
            ) : (
                products.map((d, i) => {
                    return (
                        <ProductContainer key={i}>
                            <ShoppingCartProductSp 
                                product={products[i]}
                                remove={() => removeFromBasket(products[i].id)}
                                setQuantity={setQuantity} 
                            />
                        </ProductContainer>
                    )
                })
            )}
            { windowWidth > 579 ? (
                <Subtotal>
                    Subtotal ({num} items): <span style={{fontWeight: "600"}}>${subtotal}</span>
                </Subtotal>
            ) : ("")}
        </Cart>
    );
}

export default ShoppingCartList;