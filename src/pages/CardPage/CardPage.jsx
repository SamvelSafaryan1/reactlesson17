import './CardPage.css'
import Card from '../../Components/Card/Card'

function CardPage({products, addToCard}){
    
    return(
        <div>
            {
                products.map((product) => {
                    return(
                        <Card 
                            key={product.id}
                            product={product}
                            addToCard={addToCard}
                        />
                    )
                })
            }
        </div>
    )
}

export default CardPage
