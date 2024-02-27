import categories from "./data/categories"

export default function Categories() {
  // console.log(categories)
  let categoriesList = categories.map(category => 
    <button>{category}</button>
  )

  return (
    <div>
      <h3>Categories</h3>
      {categoriesList}
    </div>
  )
}