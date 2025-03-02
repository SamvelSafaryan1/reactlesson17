
import './HomePage.css'
import Item from "../../Components/Item/Item"

function HomePage({changePriceCount, cards, del, delAll}){
    let clear = () => {
        delAll()
    }
    return(
        <div className="prods">
            {
                cards.map((card) => {
                    return <Item key={card.id} card={card} changePriceCount={changePriceCount} del={del}/>
                })
            }
            
        </div>
    )
}

export default HomePage
