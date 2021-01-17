import "./ItemList.css";
import Item from "./Item";
import {useState, useEffect} from "react";
const ItemList = ({category}) =>{

	useEffect(()=>{
		fetch(`http://localhost:5000/FoodItem/Category/${category}`)
		.then(response => response.json())
		.then(data => setItems(data));
	},[]);
	const [items, setItems] = useState([]);
	return (
		<div className="itemList">
			<h2 className="itemList__category">{category}</h2>
		{items.map(item=>(
			<Item item={item}/>	
		))}
		</div>
	);
};

export default ItemList;
