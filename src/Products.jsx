import { useEffect, useState } from 'react';
// import products from './data/products';
import Product from "./Product"

export default function Products({category}) {
  let [products, setProducts] = useState([]);

  useEffect(
    () => {
      async function fetchProducts() {
        let res = await fetch(`https://fakestoreapi.com/products/category/${category}`)
        let data = await res.json();
        setProducts(data);
      }
      fetchProducts()
    },
    [category]
  )

  let productList = products
    // .filter(
    //   product => product.category === category
    // )
    .map(
      product => <Product productDetails={product} key={product.id} />
    );

  return (
    <div>
      <h2>MyProducts</h2>
      {productList}
    </div>
  )
}