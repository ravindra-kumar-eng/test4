import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios';
import {fetchDataFailure, fetchDataRequest, setProduct} from "../redux/actions/productAction"

const ProductList = () => {
    const [isLoading,error]=useSelector((state)=>state.allProducts.products)
    const products=useSelector((state)=>state.allProducts.products)
    // const products=useSelector((state)=>state.allProducts.products)
    const dispatch =useDispatch();
   
    const fetchProducts=async()=>{
       try{
        dispatch(fetchDataRequest());
        const response=await axios.get("https://jsonplaceholder.typicode.com/posts");
        dispatch(setProduct(response.data));
        }catch(err){
            dispatch(fetchDataFailure(err))
        };

        
    }

        useEffect(()=>{
           fetchProducts();
        },[])

        console.log(products);
    
        // if(isLoading ){
        //   return <h1>Loading...</h1>
        // }
        // if(error ){
        //   return <h1>Error: {error}</h1>
        // }

   if(products){
  return (
    <div>
      {/* <h1>ProductList</h1> */}
      {/* {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error:{error}</h1>} */}

       <ProductComponent/>  
    </div>
  )
    }
}

export default ProductList
