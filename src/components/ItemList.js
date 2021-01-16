import "./ItemList.css";
import Item from "./Item";
import {useState} from "react";
const ItemList = ({category}) =>{

	const [items, setItems] = useState([
		{id: 0, name: "Naan", category: 0, price: 9.99, spiceLevel: 0},
		{id: 1, name: "Butter Naan", category: 0, price: 9.99, spiceLevel: 0},
		{id: 2, name: "Garlic Naan", category: 0, price: 9.99, spiceLevel: 0},
		{id: 3, name: "Tandoori Naan", category: 0, price: 9.99, spiceLevel: 0},
	]);
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
