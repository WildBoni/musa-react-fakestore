import { useEffect, useState } from 'react';
// import products from './data/products';
import Product from "./Product"

export default function Products({category}) {
  let [products, setProducts] = useState([]);
  let [error, setError] = useState('');
  let [isLoading, setIsLoading] = useState(false);
  
  useEffect(
    () => {
      async function fetchProducts() {
        setProducts('');
        setIsLoading(true);
        try {
          let res = await fetch(`https://sdffakestoreapi.com/products/category/${category}`)
          let data = await res.json();
          setProducts(data);
        } catch(error) {
          setError('OPS, errore')
        }
        setIsLoading(false)
      }
      fetchProducts()
    },
    [category]
  )

  let productList = <p>No products...</p>

  if(isLoading) {
    productList = <p>Loading...</p>
  }

  if(error) {
    productList = <p>{error}</p>
  }
  
  if(products.length > 0) {
    productList = products
    // .filter(
    //   product => product.category === category
    // )
    .map(
      product => <Product productDetails={product} key={product.id} />
    );
  }

  return (
    <div>
      <h2>MyProducts</h2>
      {productList}
    </div>
  )
}
