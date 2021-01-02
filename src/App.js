import './App.css';
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import {getProducts} from "./redux/reducers/getDATA";
import { dataLoader } from "./DataHandler/DataHandler"

//import Components

import Navbar from "./components/Navbar/Navbar";

function App() {
	const dispatch = useDispatch();

	useEffect(()=>{
			dataLoader('https://fakestoreapi.com/products/category/electronics').then(res => res ? dispatch(getProducts({data:res})): dispatch({data:[]}));
	})

	return (
    <div className="App">
			<Navbar/>
			<h1>Hello World</h1>
    </div>
  );
}

export default App;
