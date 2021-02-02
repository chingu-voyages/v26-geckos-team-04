import styled from 'styled-components';
import ShoppingCartList from '../components/ShoppingCart/ShoppingCartList';
import ProceedToCheckout from '../components/ShoppingCart/ProceedToCheckout';
import { useStateValue } from '../contexts/StateProvider';

// const initialProducts = [
//     {
//        "id":1,
//        "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//        "price":109.95,
//        "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//        "category":"men clothing",
//        "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
//     },
//     {
//        "id":2,
//        "title":"Mens Casual Premium Slim Fit T-Shirts ",
//        "price":22.3,
//        "description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//        "category":"men clothing",
//        "image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
//     },
//     {
//        "id":3,
//        "title":"Mens Cotton Jacket",
//        "price":55.99,
//        "description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//        "category":"men clothing",
//        "image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
//     }
// ];

const ShoppingCartPage = styled.section`
    width: 100%;
    height: 100%;
    background: #eaeded;
    // padding: 0;
    margin: 0;
    padding: 14px 18px 18px;
    box-sizing: border-box;
    min-width: 998px;
    @media screen and (max-width: 579px) {
        background: #fff;
        padding: 0;
        min-width: 332px;
    }
`;
const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    @media screen and (max-width: 579px) {
        flex-direction: column;
    }
`;
const Main = styled.main`
    // margin-right: 320px;
    padding-right: 20px;
    flex-grow: 1;
    @media screen and (max-width: 579px) {
        padding: 0;
        order: 2;
    }
`;
const Aside = styled.aside`
    margin-right: 20px;
    @media screen and (max-width: 579px) {
        order: 1;
        border-bottom: solid 1px #ddd;
        width: 100%;
    }
`;

function Orders() {
    const [{ basket, user }, dispatch] = useStateValue();
    // function add() {
    //     //temporal function to add products to shopping cart easily 
    //     initialProducts.forEach((p) => {
    //         dispatch({
    //             type: 'ADD_TO_BASKET',
    //             item: p
    //         })
    //     })
    // }
    return (
        <ShoppingCartPage>
            <Container>
                <Main>
                    <ShoppingCartList products={basket} />
                </Main>
                {/* <Aside onClick={add}> */}
                <Aside>
                    <ProceedToCheckout />
                </Aside>
            </Container>
        </ShoppingCartPage>
    );
}

export default Orders;
