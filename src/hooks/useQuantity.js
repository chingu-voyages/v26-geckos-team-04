import { useState } from 'react';
import { useStateValue } from "../contexts/StateProvider";

function useQuantity(productId) {
    const [presetQuantity, setPresetQuantity] = useState(1);
    // eslint-disable-next-line no-unused-vars
    const [_, dispatch] = useStateValue();
    const setQuantity = (n) => {
        if (n===0) {
            dispatch({
                type: 'REMOVE_FROM_BASKET',
                id: productId,
            })
        } else {
            setPresetQuantity(n)
            dispatch({
                type: 'SET_QUANTITY',
                id: productId,
                quantity: n
            })
        }
    }
    return [presetQuantity, setQuantity]
}

export default useQuantity;