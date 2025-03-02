import './Card.css'

function Card({product, addToCard}){

    let handleToCard = (product) => {
        addToCard(product)
    }

    return(
        <div className='box'>
        <div className='product'>
            <h2>{product.title}</h2>
            <img src={product.image} />
            <span>{product.price}$</span>
            <button onClick={() => handleToCard(product)}>Buy</button>
        </div>
        </div>
    )
}

export default Card
