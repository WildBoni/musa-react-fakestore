import Categories from "./Categories"
import Products from "./Products"

function App() {

  let selectedCategory = 'electronics';
  
  return (
    <>
      <Categories />
      <Products category={selectedCategory} />
    </>
  )
}

export default App
