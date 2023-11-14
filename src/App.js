import logo from "./logo.svg";
import "./App.css";
import { ProductList } from "./components/component.product.list";
import { ProductAddForm } from "./components/component.product.add";

function App() {
  return (
    <div>
      <ProductList />
      <ProductAddForm />
    </div>
  );
}

export default App;
