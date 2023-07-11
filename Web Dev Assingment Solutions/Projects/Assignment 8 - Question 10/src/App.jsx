import { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";

function App() {
  const [products, setProducts] = useState([]);

  async function getData() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.log("Error: " + err.message);
      alert("Unable to fetch products. Please try again!");
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="productContainer">
        <div className="container">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
