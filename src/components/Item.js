import "./Item.css";
const Item = ({item}) => {
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
					<button className="item__bottomButton">-</button>
					<input type="text" value="0"/>
					<button className="item__bottomButton">+</button>
				</div>	
				<p className="item__bottomPrice">$ {item.price}</p>
			</div>
			
		</div>
	);
};
export default Item;
