import Card from "../../Components/Card/Card"
import './HomePage.css'

function HomePage({product, addToCard}){
    return(
        <div className="prods">
            {
                product.map((elem) => {
                    return(
                        <Card key={elem.id} product={elem} addToCard={addToCard}/>
                    )
                })
            }
        </div>
    )
}

export default HomePage
