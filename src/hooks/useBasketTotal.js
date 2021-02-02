import { useStateValue } from '../contexts/StateProvider';

function useBasketTotal() {
    const [{ basket }] = useStateValue();
    const total = basket.reduce((sum, d) => {
        if (d.quantity && typeof(d.quantity) == "number") {
            return d.price * d.quantity + sum
        } 
        return d.price + sum
    }, 0);
    return total
}

export default useBasketTotal;
