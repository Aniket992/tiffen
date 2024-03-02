import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Signin from './Pages/SignIn';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import breakfast_banner from './Components/Assests/bbreakfast.jpg'
import lunch_banner from './Components/Assests/blunch.png'
import dinner_banner from './Components/Assests/Bdinner.png'
import {  SignedIn, SignedOut } from "@clerk/clerk-react"
import Checkout from './Components/Checkout/Checkout';
function App() {
  return (
    <div >
            {/* <p>This content is public. Only signed out users can see the SignInButton above this text.</p> */}
            

     
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/breakfast' element={<ShopCategory banner = {breakfast_banner} category ="breakfast"/>}/>
        <Route path='/lunch' element={<ShopCategory banner = {lunch_banner} category ="lunch"/>}/>
        <Route path='/dinner' element={<ShopCategory banner = {dinner_banner} category ="dinner"/>}/>
        <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/Checkout' element={<Checkout/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
