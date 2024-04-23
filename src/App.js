import data from './data';
import {BrowserRouter} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div >
      <header>
         <a href="/">Amazona</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div className="products">
          {data.products.map((product) => (
            <div className="product" key={product.slug}>
              <a href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <div className="product-info">
                <a href={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </a>
                <p>
                  <strong>${product.price}</strong>
                </p>
                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
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