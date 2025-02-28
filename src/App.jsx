import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import Layout from './Components/Layout/Layout'
import CardPage from './pages/CardPage/CardPage'
import HomePage from './pages/HomePage/HomePage'

function App() {
  let [products, setProducts] = useState([])
  let [card, setCard] = useState([])

  useEffect(() => {
    fetch('https://Fakestoreapi.com/products')
    .then((res) => res.json())
    .then((res) => setProducts(res.map((prod) => {
      return{
        ...prod,
        count: 1,
        price: prod.price
      }
    })))
  }, [])

  let addToCard = (item) => {
    setCard([...card, item])
  }

  return(
    <div className="app">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage product={products} addToCard={addToCard}/>}/>
          <Route path='/card' element={<CardPage card={card}/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
