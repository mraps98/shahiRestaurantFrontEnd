import './App.css';
import Home from "./screens/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  return (
    <div className="app">
	  <Router>
	  	<Switch>
	  		<Route path="/cart">
	  			<Navbar />
	  			<div className="container">
	  				<p>Cart</p>
	  			</div>
	  			<Footer />
	  		</Route>
	  		<Route path="/">
	  			<Navbar />
	  			<div className="container">
	  			<Home />
	  			</div>
	  			<Footer />
	  		</Route>
	  	</Switch>
	  </Router>
    </div>
  );
}

export default App;
