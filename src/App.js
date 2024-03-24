import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import SingUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct'
import React from 'react';



function App() {

  // const notify = () => toast("Wow so easy!");
  

  return (
    <div className="App">

{/* <button onClick={notify}>Notify!</button> */}
       

      <BrowserRouter>
      <Nav/>
     <Routes>

      <Route element={<PrivateComponent/>}>
     <Route path="/" element={<ProductList/>}/>
     <Route path="/add" element={<AddProduct/>}/>
     <Route path="/update/:id" element={<UpdateProduct/>}/>
     <Route path="/logout" element={<h1> logout Component</h1>}/>
     <Route path="/profile" element={<h1> Profile  Component</h1>}/>

     </Route>

     <Route path="/signup" element={<SingUp/>}/>
     <Route path="/login" element={<Login/>}/>

     </Routes>
     
      <Footer/>

      </BrowserRouter>
      {/* <ToastContainer 
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        /> */}
    </div>
  );
}

export default App;
