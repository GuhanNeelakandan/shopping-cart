import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Products from './product.js';
import { useEffect, useState } from "react";
import CartItems from './cartitem.js';
import axios from 'axios';
// Data for the product
function App() {
  const [mobileCard, setMobileCard] = useState([])
  let getdata= async()=>{
    const {data} = await axios.get("https://b32wdt-web-scrap.herokuapp.com/mobile");
    console.log(data);
    setMobileCard(data);
}

useEffect(()=>{
  getdata();
},[])
// state
  const [cartitems, setCartItems] = useState([])
  const [total, setTotal] = useState(0)
// adding to cart
  let handleCart = (item) => {
    setCartItems([...cartitems, item]);
    setTotal(total + item.price);
  }
// removing cart item
  let handleRemoveCart = (item) => {
    let itemIndex = cartitems.findIndex(obj => item.id === obj.id)
    cartitems.splice(itemIndex, 1);
    setCartItems([...cartitems])
    setTotal(total - item.price)
  }

  return (
    <div>
      {/* Nav bar */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5">
          <a class="navbar-brand" href="">Start Bootstrap</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li class="nav-item"><a class="nav-link active" aria-current="" href="">Home</a></li>
              <li class="nav-item"><a class="nav-link" href="">About</a></li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdown" href="" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="">All Products</a></li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li><a class="dropdown-item" href="">Popular Items</a></li>
                  <li><a class="dropdown-item" href="">New Arrivals</a></li>
                </ul>
              </li>
            </ul>
            <form class="d-flex">
              <button class="btn btn-outline-dark" type="submit">
                <i class="bi-cart-fill me-1"></i>
                Cart
                <span class="badge bg-dark text-white ms-1 rounded-pill">{cartitems.length}</span>
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* cart list */}
      <div>
        <ol class="list-group list-group-numbered">
          {
            cartitems.map((item) => {
              return <li><CartItems item={item} handleRemoveCart={handleRemoveCart} /></li>
            })
          }
        </ol>
        {/* total of the cart */}
      </div>
      {
        cartitems.length > 0 ? <div>
          <h1 className='col-lg-12 text-center'>Total: $ {total}</h1>
        </div> : <div>
          <h1 className='col-lg-12 text-center'>No Item in Cart</h1>
        </div>
      }
      {/* header */}
      <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">MOBIKART</h1>
            <p class="lead fw-normal text-white-50 mb-0">NEW LATEST MOBILE</p>
          </div>
        </div>
      </header>
      {/* Cart Items */}
      <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {mobileCard.map((card) => {
              return <Products productData={card} handleCart={handleCart} cartItems={cartitems} />
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
