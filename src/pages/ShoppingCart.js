import styled from 'styled-components';
import ShoppingCartList from '../components/ShoppingCartList';
import ProceedToCheckout from '../components/ProceedToCheckout';

const ShoppingCartPage = styled.section`
    width: 100%;
    height: 100%;
    background: #eaeded;
    padding: 0;
    margin: 0;
    padding: 14px 18px 18px;
    box-sizing: border-box;
    min-width: 998px;
`;
const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;
const Main = styled.div`
    // margin-right: 320px;
    padding-right: 20px;
    flex-grow: 1;
`;
const Aside = styled.div`
    margin-right: 20px;
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
