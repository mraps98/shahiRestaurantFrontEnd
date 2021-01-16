import {Link} from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
	return(
		<div className="navbar">
			<div className="navbar__left">
				<Link to="/">
					<h1 className="navbar__leftTitle">Shahi Restaurant</h1>		
				</Link>
			</div>
			<div className="navbar__mid">
				<div className="navbar__midLinks">
					<a className="navbar__midLink">Appetizers</a>
					<a className="navbar__midLink">Main Course</a>
					<a className="navbar__midLink">Breads</a>
					<a className="navbar__midLink">Desserts</a>
					<a className="navbar__midLink">Beverages</a>
				</div>
			</div>
			<div className="navbar__right">
				<Link to="/cart">cart</Link>
			</div>
		</div>
	);
}
	
export default Navbar;
