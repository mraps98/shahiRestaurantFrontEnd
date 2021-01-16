import ItemList from "../components/ItemList";
const Home = () =>{
	return(
		<div className="home">	
			<ItemList category="appetizers" />
			<ItemList category="breads" />
			<ItemList category="main" />
			<ItemList category="desserts" />
		</div>
	);
}

export default Home;
