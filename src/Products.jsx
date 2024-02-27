import products from './data/products';
import Product from "./Product"

export default function Products() {
  let productList = products.map(product => 
    <Product productDetails={product} />
  )

  return (
    <div>
      <h2>MyProducts</h2>
      {productList}
    </div>
  )
}