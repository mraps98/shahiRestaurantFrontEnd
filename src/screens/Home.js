import ItemList from "../components/ItemList";
import {useEffect, useState} from "react";
const Home = () =>{
	useEffect(()=>{
		fetch("http://localhost:5000/FoodItem/Categories")
		.then(response => response.json())
		.then(data=> setCategories(data));
	},[]);

	const [categories, setCategories] = useState([]); 
	return(
		<div className="home">
			{categories.map(category=>(
				<ItemList category={category} />))
			}
		</div>
	);
}

export default Home;
