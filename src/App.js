import React, { useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import Basket from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getAuth} from "firebase/auth";
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  "pk_test_51MA65DFiGLVVBx6tPflSVHOBevVRu40hECzMUP3HjfJ6"+
  "y948v4om4roGg0cYTkkRB3fKXMj7dgDykGDFWUrj7jH800MCc3MRmK"
);

function App() {
    const [{}, dispatch] = useStateValue();
    const auth = getAuth();
    useEffect(()=>{
      auth.onAuthStateChanged(authUser => {
        if (authUser) {
          dispatch({
             type: 'SET_USER',
            user: authUser
          })
       } else {
         dispatch({
            type: 'SET_USER',
           user: null
          })
       }
     })
    },[]
    
    )


  return (
    <BrowserRouter>
    <div className="App">
      
        <Header />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Checkout/*" element={<Basket />} />
          <Route path="/Login/*" element={<Login />} />
          <Route path="/Orders/*" element={<Orders />} />
          <Route path="/payment/*" element={<Elements stripe={ promise }><Payment /></Elements>} />
          
       </Routes>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
