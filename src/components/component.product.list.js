import { useEffect, useState } from "react";
import { deleteProductByID, getAllProducts } from "../services/http-common.js";

export function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);
  async function fetchProducts() {
    const res = await getAllProducts();
    setProducts(res.data);
  }
  async function deleteProduct(id) {
    const res = await deleteProductByID(id);
    fetchProducts();
  }

  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>nom</th>
          <th>price</th>
        </tr>
      </thead>
      {products.map((elem, index) => (
        <tr key={index}>
          <td>{elem.id}</td>
          <td>{elem.nom}</td>
          <td>{elem.price}</td>
          <td>
            <button onClick={deleteProduct}>Supprimer</button>
          </td>
        </tr>
      ))}
    </table>
  );
}
