import { useState } from "react";
import Categories from "./Categories"
import Products from "./Products"

function App() {
  let [selectedCategory, setSelectedCategory] = useState('electronics');
  // let selectedCategory = 'electronics';
  
  return (
    <>
      <Categories handleClick={setSelectedCategory}/>
      <Products category={selectedCategory} />
    </>
  )
}

export default App
