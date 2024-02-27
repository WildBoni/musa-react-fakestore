import categories from "./data/categories"

export default function Categories({handleClick}) {
  
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