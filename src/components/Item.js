import "./Item.css";
import {useDispatch, useSelector} from "react-redux";
import {actionTypes, getItemCount} from "../reducers/cartReducer";
const Item = ({item}) => {

	const dispatch = useDispatch();
	const cartItems = useSelector(state=>state);
	const itemCount = getItemCount(cartItems, item);
	return(
		<div className="item">
			<div className="item__top">
				<h3 className="item__topName">{item.name}</h3>
			{item.isVegetarian && (<p className="item__topVegetarian">Vegetarian</p>)}

			<div className="item__topSpiceChillis">
		{Array(item.spiceLevel).fill(<img className="item__topSpiceChilli" alt="chilli" src="./img/chilli.png" />)}
			</div>
			</div>
			<div className="item__mid">
				<img src={`./img/${item.name}.jpg`} className="item__midImage" />
			</div>
			<div className="item__bottom">
				<div className="item__bottomOptions">
					<button disabled={!itemCount} className="item__bottomButton" onClick={()=>dispatch({
						type: actionTypes.REMOVE_FROM_CART,
						payload: item,
					})}>-</button>
					<input type="text" value={itemCount} />
					<button className="item__bottomButton" onClick={() => dispatch({
						type : actionTypes.ADD_TO_CART,
						payload: item,
					})}>+</button>
				</div>	
				<p className="item__bottomPrice">$ {item.price}</p>
			</div>
			
		</div>
	);
};
export default Item;
