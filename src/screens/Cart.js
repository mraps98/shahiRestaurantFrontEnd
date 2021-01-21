import "./Cart.css";
import {useSelector, useDispatch} from "react-redux";
import {getCartSummary, getCartTotal, actionTypes} from "../reducers/cartReducer.js";
const Cart = () => {

	const cartItems = useSelector(state=>state);
	const cartSummary = getCartSummary(cartItems);
	const cartTotal = getCartTotal(cartItems);
	const dispatch = useDispatch();

	return(
		<div className="cart">
		{cartItems?.length > 0? (
			<div className="cart__summary">
				<div className="cart__summaryHeader">
					<h2>Item</h2>
					<h2>Quantity</h2>
					<h2>Amount</h2>
				</div>
			{
				cartSummary.map(cartSummaryData=>(
					<div className="cart__summaryItem">
					<div className="cart__summaryItemName">{cartSummaryData.item.name}</div>	
					<div className="cart__summaryItemCount">
					
					<button disabled={!cartSummaryData.count} className="item__bottomButton" onClick={()=>dispatch({
						type: actionTypes.REMOVE_FROM_CART,
						payload: cartSummaryData.item,
					})}>-</button>
					<p>{cartSummaryData.count}</p>
					<button className="item__bottomButton" onClick={() => dispatch({
						type : actionTypes.ADD_TO_CART,
						payload: cartSummaryData.item,
					})}>+</button>
					</div>
					<div className="cart__summaryItemPrice">$ {(cartSummaryData.item.price * cartSummaryData.count).toFixed(2)}</div>
					</div>
				))
			}
				<div className="cart__summaryFooter">
					<p></p>
					<h2>Total: </h2>
					<p>$ {cartTotal}</p>
				</div>
			
			<div className="cart__checkout">
				<button onClick={()=>dispatch({type:actionTypes.CHECKOUT})}>Checkout</button>
			</div>
			</div>) : (<p>No Items in cart</p>)
		}
		</div>
	);
};
export default Cart;
