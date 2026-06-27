import logo from './logo.svg';
import './App.css';
import Product from './product';

function App() {
  const productName = "pantolon"

  return (
    <div className="App">
      <Product productName="ayakkabi" price={3200}></Product>
      <hr />
      <Product productName="Buzdolabı" price={5200}></Product>
      <hr />
      <Product productName={productName} price={5000}></Product>







    </div>
  );
}

export default App;





