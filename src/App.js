import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Products from './product.js';
import { useState } from "react";
import CartItems from './cartitem.js';
// Data for the product
function App() {
  const [productCard, setProducts] = useState([
    {
      id: 1,
      image: "https://rukminim2.flixcart.com/image/312/312/j4irlow0/mobile/7/5/y/samsung-galaxy-s8-na-original-imaevev23ayqjc45.jpeg?q=70",
      name: "Samsung S8",
      price: 40000,
      rating: false,

    },
    {
      id: 2,
      image: "https://rukminim2.flixcart.com/image/312/312/k13w4280/mobile/h/q/h/apple-iphone-7-plus-mn4w2hn-a-original-imafkqfhzxgedrcu.jpeg?q=70",
      name: "Iphone 7 128GB",
      price: 10000,
      strike: 14000,
      value: true,
      rating: true,

    },
    {
      id: 3,
      image: "https://rukminim2.flixcart.com/image/312/312/j9d3bm80/mobile/f/y/v/apple-iphone-x-mqa92hn-a-original-imaeyysgqbg8qmhn.jpeg?q=70",
      name: "Iphone X",
      price: 29000,
      strike: 35000,
      value: true,
      rating: false,

    },
    {
      id: 4,
      image: "https://rukminim2.flixcart.com/image/312/312/ky90scw0/mobile/s/5/d/-original-imagagnfgh6ed7tp.jpeg?q=70",
      name: "Real me 9i",
      price: 20000,
      rating: true,

    },
    {
      id: 5,
      image: "https://rukminim2.flixcart.com/image/312/312/kpmy8i80/mobile/x/q/n/m3-pro-5g-mzb0956in-poco-original-imag3th5e4thsxjt.jpeg?q=70",
      name: "POCO M3 PRO",
      strike: 30000,
      price: 25000,
      value: true,
      rating: false,

    },
    {
      id: 6,
      image: "https://rukminim2.flixcart.com/image/312/312/ku04o7k0/mobile/p/8/u/9i-sport-mzb0a5iin-redmi-original-imag785qegs5ghyy.jpeg?q=70",
      name: "oppo Reno",
      price: 25000,
      rating: false,

    },
    {
      id: 7,
      image: "https://rukminim2.flixcart.com/image/312/312/l0h1g280/mobile/e/h/c/-original-imagc9cqbgtgfzum.jpeg?q=70",
      name: "Redmi Note 10 pro",
      strike: 22000,
      price: 20000,
      value: true,
      rating: true,

    },
    {
      id: 8,
      image: "https://rukminim2.flixcart.com/image/312/312/kn22m4w0/mobile/a/q/8/galaxy-f12-sm-f127gzgiins-samsung-original-imagftmjw3xqg4yk.jpeg?q=70",
      name: "Samsung F12",
      price: 40000,
      rating: true,

    },
  ])
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
            {productCard.map((card) => {
              return <Products productData={card} handleCart={handleCart} cartItems={cartitems} />
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
