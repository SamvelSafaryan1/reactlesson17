import './Card.css'

function Card({product, addToCard}){

    let handleToCard = (products) => {
        addToCard(products, products.id)
    }

    return(
        <div className='box'>
        <div className='product'>
            <h2>{product.title}</h2>
            <img src={product.image} />
            <span>{product.price}</span>
            <button onClick={() => handleToCard(product)}>Buy</button>
        </div>
        </div>
    )
}

export default Card
