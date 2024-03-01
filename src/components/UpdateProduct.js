import React, { useEffect } from "react";
// import { json, useParams } from "react-router-dom";
import axios from "axios";
import { json, useParams,useNavigate } from "react-router-dom";


const UpdateProduct = () => {
    const [prtnumber, setPrtnumber] = React.useState('')
    const [name, setName] = React.useState('')
    const [price, setPrice] = React.useState('')
    const [category, setCategory] = React.useState('')
    const [company, setCompany] = React.useState('')
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        
        getProductDetails();
    },[])

    const getProductDetails = async()=>{
        console.log(params)
        let result = await axios.get(`http://localhost:5000/product/${params.id}`);

        const resultdata = await result.data
        // console.warn(resultdata);

        setPrtnumber(resultdata.prtnumber)
        setName(resultdata.name)
        setPrice(resultdata.price)
        setCategory(resultdata.category)
        setCompany(resultdata.company)

    }


    const UpdateProduct = async () => {
        console.warn(prtnumber, name,price, category, company)

        let result = await fetch(`http://localhost:5000/product/${params.id}`,{

        method:'put',
        body:JSON.stringify({prtnumber, name, price, category, company}),

        headers:{
            'Content-Type':"application/json"
        }

        })

        result = await result.json()
        console.log(result)

        navigate('/')

    

    }
    // const updateProduct=async()=>{
    //     console.log(prtnumber, name, category, company);
    //    let result=await axios.put(`http://localhost:5000/product/${params.id}`,{
    //     prtnumber, name, category, company,
    // },
    //       {
    //         headers:{
    //             'Content-Type':'application/json'

    //         }
    //       }

            
    //     )
    //     console.log("result is",result)

    //  const resultdata =  result.data
    //  console.log(resultdata);

    // //  localStorage.setItem("user",JSON.stringify({name,email,password}));
    // //  localStorage.setItem("user",JSON.stringify(resultdata));

    //  if(resultdata){
    //     navigate('/login')
    //  }
    // }


    return (
        <div className="product">

            <h1>Update Product</h1>
            <input value={prtnumber} className="inputBox" type="text" placeholder="Enter Product Part Number"
                onChange={(e) => { setPrtnumber(e.target.value) }} required
            />
            <input value={name} className="inputBox" type="text" placeholder="Enter Product  Name"
                onChange={(e) => { setName(e.target.value) }} required
            />
            <input value={price} className="inputBox" type="text" placeholder="Enter Product Price"
                onChange={(e) => { setPrice(e.target.value) }} required
            />
            <input value={category} className="inputBox" type="text" placeholder="Enter Product category"
                onChange={(e) => { setCategory(e.target.value) }} required
            />
            <input value={company} className="inputBox" type="text" placeholder="Enter Product Company"
                onChange={(e) => { setCompany(e.target.value) }} required
            />
            <button onClick={UpdateProduct}  className="appButton">Update Product</button>
        </div>
    )
}

export default UpdateProduct;
