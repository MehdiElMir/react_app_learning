import { useState } from "react";
import { addProduct } from "../services/product.services";

export function ProductAddForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  function handleForm(event) {
    event.preventDefault();
    const p = { name: name, price: price };
    addProduct(p);
  }

  return (
    <form onSubmit={(e) => handleForm(e)}>
      <label htmlFor="nom">Nom :</label>
      <input
        type="text"
        id="nom"
        onChange={(e) => {
          setNom(e.target.value);
        }}
      />

      <br />
      <label htmlFor="price">price :</label>
      <input
        type="number"
        id="price"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <br />
      <input type="submit" value={"Enregistrer"} />
      <input type="reset" value={"Annuler"} />
    </form>
  );
}
