import "./Item.css";
const Item = ({item}) => {
	return(
		<div className="item">
			<h3 className="item__name">{item.name}</h3>
			<img src={`${item.name}.jpg`} className="item__image" />
			<p className="item__price">${item.price}</p>
			
		</div>
	);
};
export default Item;
