import { useEffect, useState } from "react"
// import categories from "./data/categories"
// 'https://fakestoreapi.com/products/categories'

export default function Categories({handleClick}) {
  let [categories, setCategories] = useState([]);

  useEffect(
    () => {
      //funzione da eseguire
      async function fetchCategories() {
        let res = await fetch('https://fakestoreapi.com/products/categories');
        let data = await res.json();
        setCategories(data);
      }
      fetchCategories()
    },
    [] // array per chiamare useEffect
  )

  let categoriesList = categories.map(category => 
    <button onClick={() => handleClick(category)} key={category}>
      {category}
    </button>
  )

  return (
    <div>
      <h3>Categories</h3>
      {categoriesList}
    </div>
  )
}