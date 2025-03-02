import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import Layout from './Components/Layout/Layout'
import CardPage from './pages/CardPage/CardPage'
import HomePage from './pages/HomePage/HomePage'

function App() {
  let [products, setProducts] = useState([])
  let [cards, setCards] = useState([])

  useEffect(() => {
    fetch('https://Fakestoreapi.com/products')
    .then((res) => res.json())
    .then((res) => setProducts(res.map((prod) => {
      return{
        ...prod,
        count: 1,
        cardPrice: prod.price
      }
    })))
  }, [])

  let changePriceCount = (count, id) => {
    setCards(cards.map((card) => {
      if(card.id === id){
        return{
          ...card,
          count: count,
          cardPrice: card.price * count
        }
      }
      else{
        return card
      }
    }))
  }

  let del = (id) => {
    setCards(cards.filter((elem) => elem.id !== id))
  }

  let addToCard = (item) => {
    let boll = false

    cards.forEach((card) => {
      if(card.id === item.id){
        boll = true
        setCards(cards.map((elem) => {
          if(elem.id === item.id){
            return{
              ...elem,
              count: ++elem.count,
              cardPrice: elem.cardPrice + elem.price
            }
          }
          else{
            return elem
          }
        }))
      }
    })

    if(!boll){
      setCards((prev) => {
        return[...prev, item]
      })
    }
  }

  let delAll = () => {setCards([])}

  return(
    <div className="app">
      <Routes>
        <Route path='/' element={<Layout cards={cards}/>}>
          <Route index element={<HomePage cards={cards} changePriceCount={changePriceCount} del={del} delAll={delAll}/>}/>
          <Route path='/card' element={<CardPage products={products} addToCard={addToCard}/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
