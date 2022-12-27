const ProductCard = ( product ) => {

    return (
        <div className="productCard-container">
            <h3>{product.attributes.attributes.title}</h3>
            
        </div>
    )
}

export default ProductCard;
