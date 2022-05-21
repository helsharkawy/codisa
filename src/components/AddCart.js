import { useContext } from "react";
import CartContext from '../App';


const AddCart = ({id}) => {
    let items = useContext(CartContext);
    return (
        <>
            <button className="add-cart">Add to Cart</button>
        </>
    );
}

export default AddCart;