import Footer from './components/Footer';
import Header from './components/Header';
import Review from './components/Review';
import Landing from './components/Landing';
import HomeProducts from './components/HomeProducts';
import Login from './components/Login';
import Cart from './components/Cart';
import Product from './components/Product';
import Notfound from './components/Notfound';
import React from 'react';
import useFetch from './components/useFetch';
import { useState , useEffect } from 'react';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import ProductQPreview from './components/ProductQPreview';
import PorductDPreview from './components/ProductDPreview';
import Register from './components/Register';
import './App.css';

window.addEventListener('scroll', ()=> {
  if (window.matchMedia("(min-width: 992px)").matches &  document.documentElement.scrollTop > 272.9 ) {
    document.querySelector(".desktop-sticky-header").style.display = "block";
  } else {
    document.querySelector(".desktop-sticky-header").style.display = "none";
  }
}); 

export const CartContext = React.createContext();
export const SearchContext = React.createContext();



function App() {

  const [cartItems,setCartItems] = useState();
function handleCartItems(itmID) {

}

const searchItems = (itemsID) => {
  const items= products.filter((product) => {(product.productName.includes(itemsID))})
}
  const [reviews, setReviews] = useState([])
  const [products, setProducts] = useState([]);
  const [homeTabs , setHomeTabs] = useState([]);
  const [searchResult , setSearchResult] = useState([]);
  const [hookah , setHookah] = useState([]) ;
  const [shisha , setShisha] = useState([]) ;
  const [accessories , setAccessories] = useState([]) ;
  const [charcoal , setCharcoal] = useState([]) ;


  useEffect(() => {
    fetchData();
  }, [])

  function fetchData () {
    // fetch('http://localhost:8000/products')
    // .then(res => { 
    //   return res.json(); })
    // .then(data => { 
    //   setProducts(data);
    //   setHookah(data.filter((product) => product.category === 'Hookah'));
    //   setShisha(data.filter((product) => product.category === 'Shisha'));
    //   setAccessories(data.filter((product) => product.category === 'Accessories'));
    //   setCharcoal(data.filter((product) => product.category === 'Charcoal'));
    // })
    // .catch(err =>{ console.log(err); });
    
    fetch('data.json',
    {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    // fetch('https://api.jsonbin.io/b/62892f03449a1f3821e834c5')
    .then(res => {return res.json();})
    .then(data => { 
      setReviews(data.reviews);
      setHomeTabs(data.hometabs);
      setProducts(data.products);
      setHookah(data.products.filter((product) => product.category === 'Hookah'));
      setShisha(data.products.filter((product) => product.category === 'Shisha'));
      setAccessories(data.products.filter((product) => product.category === 'Accessories'));
      setCharcoal(data.products.filter((product) => product.category === 'Charcoal')); })
    .catch(err =>{ console.log(err); });

    // fetch('../data/db.json/home-tabs')
    // .then(res => { return res.json(); })
    // .then(data => {setHomeTabs(data); })
    // .catch(err =>{ console.log(err); });
  }

  // setCartItems([{
  //   id:1,
  //   imageSrc:"productsImages/1.png",
  //   name:"Egyptian Hookah",
  //   price:30,
  //   qty:1
  // }]);

  return (
    <Router>
    <div className='app-container'>
    <Header/>
    <CartContext.Provider value={handleCartItems}>
    <SearchContext.Provider value={searchItems}>
    <div className='page-content'>
    <Switch>
      <Route exact path='/'>
        <Landing />
        <HomeProducts products={products} homeProducts={homeTabs}/>
        <Review reviews={reviews}/>
      </Route>
      <Route path='/category/hookah'>
        <div className='cat-name'>
          <h2>Hookah</h2>
          <Product allproducts={hookah}/>
        </div>
      </Route>
      <Route path='/category/shisha'>
        <div className='cat-name'>
          <h2>Shisha</h2>
          <Product allproducts={shisha}/>
        </div>
      </Route>
      <Route path='/category/accessories'>
        <div className='cat-name'>
          <h2>Accessories</h2>
          <Product allproducts={accessories}/>
        </div>
      </Route>
      <Route path='/category/charcoal'>
        <div className='cat-name'>
          <h2>Charcoal</h2>
          <Product allproducts={charcoal}/>
        </div>
      </Route>
      <Route path='/search'>
        <div className='search-result'>
          <Product allproducts={products}/>
        </div>
      </Route>
      <Route path='/product/:id'>
        <PorductDPreview products={products}/>
      </Route>
      <Route path='/product/preview/:id'>
        <ProductQPreview />
      </Route>
      <Route path='/account/login'>
        <Login user={"login"}/>
      </Route>
      <Route path='/account/register'>
        <Register user= {"register"}/>
      </Route>
      <Route path='/cart'>
        {Cart && <Cart items={cartItems}/>}
      </Route>
      <Route path='/*'>
        <Notfound/>
      </Route>
    </Switch>
  </div>
    </SearchContext.Provider>
    </CartContext.Provider>
    
    <Footer/>
  </div>
    </Router>
  );
}

export default App;