import products from './data/products';
import Product from "./Product"

export default function Products({category}) {

  let productList = products
    .filter(
      product => product.category === category
    )
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