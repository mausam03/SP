import React from "react";
import { json } from "react-router-dom";
import axios from "axios";


const AddProduct=()=>{
     

    const[prtnumber, setPrtnumber]= React.useState('')
    const[name, setName]= React.useState('')
    const[price, setPrice]= React.useState('')
    const[category, setCategory]= React.useState('')
    const[company, setCompany]= React.useState('')
    const[error , setError]=React.useState(false)

       const AddProduct= async()=>{

        console.log(prtnumber);

        if(!prtnumber || !name || !price || !category || !company){
            setError(true)
            return false;
        }

     

         console.warn(prtnumber,name,price,category,company)

        const userId= JSON.parse(localStorage.getItem('user'))._id
        let result =await axios.post("http://localhost:5000/add-product",{
           
        prtnumber,name,price,category,company,userId,
            headers:{
                'Content-Type':'application/json'
            }         
        })

     console.log("result is", result)
        result = await result;
        console.log(result);
       }


    return(
        <div className="product">
         
         <h1>Add Product</h1>
         <input value={prtnumber} className="inputBox"  type="text" placeholder="Enter Product Part Number"
          onChange={(e)=>{setPrtnumber(e.target.value)}} required
         />
         { error && !prtnumber && <span className="invalid-input">Invalid PartNumber </span>}
         <input  value={name} className="inputBox" type="text" placeholder="Enter Product  Name"
         onChange={(e)=>{setName(e.target.value)}} required
         />
         { error && !name && <span className="invalid-input">Invalid PartNumber </span>}
         <input value={price} className="inputBox" type="text" placeholder="Enter Product Price"
         onChange={(e)=>{setPrice(e.target.value)}} required
         />
         { error && !price && <span className="invalid-input">Invalid PartNumber </span>}
         <input value={category} className="inputBox" type="text" placeholder="Enter Product category"
         onChange={(e)=>{setCategory(e.target.value)}} required
         />
         { error && !category && <span className="invalid-input">Invalid PartNumber </span>}
         <input value={company} className="inputBox" type="text" placeholder="Enter Product Company"
         onChange={(e)=>{setCompany(e.target.value)}} required
         />
         { error && !company && <span className="invalid-input">Invalid PartNumber </span>}
         <button onClick={AddProduct} className="appButton">Add Product</button>
        </div>
    )
}

export default AddProduct;
