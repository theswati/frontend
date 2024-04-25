// import data from './data';
// import {BrowserRouter} from "react-router-dom"
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
    <div >
      <header>
         <a href="/">Amazona</a>
      </header>
      <main>
      <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
	export default App;


  // Add page routing
  // 1. npm i react-router-dom
  // 2. create route for home screen
  // 3. create router for product screen