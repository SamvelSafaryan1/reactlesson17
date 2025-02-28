import './CardPage.css'

function CardPage({card}){
    
    return(
        <div>
            {
                card.map((cart) => {
                    return(
                        <li>{cart.title}</li>
                    )
                })
            }
        </div>
    )
}

export default CardPage
