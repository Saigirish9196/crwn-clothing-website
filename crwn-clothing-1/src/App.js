import Categories from "./components/categories/categories.jsx"
import {Route,Routes } from 'react-router-dom'
import NavBar from "./components/navigation/Nav.comp.jsx";
import Authenticate from "./pages/authenticate/Authenticate.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ShopComp from "./pages/shop/Shop.Comp.js";
import Checkout from "./pages/checkout/Checkout.js";
import ShopItem from "./pages/shop-items/ShopItem.jsx";

const App= () => {

  return (
    <GoogleOAuthProvider clientId={'769634087585-a37dj6f8qcvdalqip0gn7ptn1ljs1bfs.apps.googleusercontent.com'}>
    <Routes>
        <Route path="/" element={<NavBar/>}>
          <Route index element={<Categories/>} />
          <Route path="shop" element = {<ShopComp/>} />
          <Route path="shop/:category" element = {<ShopItem/>} />
          <Route path="auth" element = {<Authenticate/>} />
          <Route path="checkout" element = {<Checkout/>} />
        </Route>
    </Routes>
    </GoogleOAuthProvider>
  
  );
}

export default App;
