import './App.css';
import Home from "./screens/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
	  <Router>
	  	<Switch>
	  		<Route path="/cart">
	  			<Navbar />
	  			<p>Cart</p>
	  			<Footer />
	  		</Route>
	  		<Route path="/">
	  			<Navbar />
	  			<Home />
	  			<Footer />
	  		</Route>
	  	</Switch>
	  </Router>
    </div>
  );
}

export default App;
