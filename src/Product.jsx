export default function Product({productDetails}) {
  // console.log(productDetails)
  return (
    <article>
      <h3>{productDetails.title}</h3>
      <p>{productDetails.description}</p>
      <img src={productDetails.image} />
      <h3>{productDetails.price}</h3>
    </article>
  )
}