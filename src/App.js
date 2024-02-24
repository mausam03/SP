import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import SingUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
     <Routes>

      <Route element={<PrivateComponent/>}>
     <Route path="/" element={<h1>Product Listing Component </h1>}/>
     <Route path="/add" element={<AddProduct/>}/>
     <Route path="/update" element={<h1> Update Product Component</h1>}/>
     <Route path="/logout" element={<h1> logout Component</h1>}/>
     <Route path="/profile" element={<h1> Profile  Component</h1>}/>

     </Route>

     <Route path="/signup" element={<SingUp/>}/>
     <Route path="/login" element={<Login/>}/>

     </Routes>
     <div>
      <Footer/>

     </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
