// componenet of the cart 
function Products(props) {
    return (
        <div class="col mb-5">
            <div class="card h-100">
                {/* sale badge */}
                {props.productData.value? <div class="badge bg-white text-dark position-absolute sale">Sale</div> : ""}
                {/* image */}
                <img class="card-img-top" src={props.productData.image} alt="..." />
                {/* product details */}
                <div class="card-body p-4">
                    <div class="text-center">
                        <h5 class="fw-bolder">{props.productData.name}</h5>
                        {/* rating star */}
                        {props.productData.rating ? <div class="d-flex justify-content-center small text-warning">
                            <div><i className="fa fa-solid fa-star"></i></div>
                            <div><i className="fa fa-solid fa-star"></i></div>
                            <div><i className="fa fa-solid fa-star"></i></div>
                            <div><i className="fa fa-solid fa-star"></i></div>
                            <div><i className="fa fa-solid fa-star"></i></div>
                        </div> : ""}
                        {/* strike the price */}
                        {props.productData.value ? <span class="text-muted text-decoration-line-through">${props.productData.strike}</span> : ""} ${props.productData.price}
                    </div>
                </div>
                {/* button */}
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center">
                        <button
                            disabled={props.cartItems.some(obj => obj.id === props.productData.id)}
                            onClick={() => props.handleCart(props.productData)}
                            class="btn btn-outline-dark mt-auto">Add Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Products;
