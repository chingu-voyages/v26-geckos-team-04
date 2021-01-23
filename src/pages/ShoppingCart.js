import styled from 'styled-components';
import ShoppingCartList from '../components/ShoppingCart/ShoppingCartList';
import ProceedToCheckout from '../components/ShoppingCart/ProceedToCheckout';

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
const Main = styled.div`
    // margin-right: 320px;
    padding-right: 20px;
    flex-grow: 1;
    @media screen and (max-width: 579px) {
        padding: 0;
        order: 2;
    }
`;
const Aside = styled.div`
    margin-right: 20px;
    @media screen and (max-width: 579px) {
        order: 1;
        border-bottom: solid 1px #ddd;
        width: 100%;
    }
`;

function ShoppingCart() {
    return (
        <ShoppingCartPage>
            <Container>
                <Main>
                    <ShoppingCartList />
                </Main>
                <Aside>
                    <ProceedToCheckout />
                </Aside>
            </Container>
        </ShoppingCartPage>
    );
}

export default ShoppingCart;
