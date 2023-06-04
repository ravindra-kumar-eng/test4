// import useEffect from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct,removeSelectedProduct } from '../redux/actions/productAction';
import { useEffect } from "react";
const ProductDetail = () => {
  const product=useSelector((state)=>state.product);
  const {title,id,body,userId}=product
  const {productId}=useParams();
  const dispatch=useDispatch();
  console.log(productId);

  const fetchProductsDetail=async()=>{
    const response =await axios.get(`https://jsonplaceholder.typicode.com/posts/${productId}`)
    .catch((err)=>{
      console.log("Err",err);
    });
    dispatch(selectedProduct(response.data));

  };

  useEffect(()=>{
    if(productId && productId !==""){
    fetchProductsDetail();
    }
    return()=>{
      dispatch(removeSelectedProduct())
    }

  },[productId]);
  return (
    <div className="product3 ">
      {Object.keys(product).length ===0 ?(
       <div>...Loading</div> 
      ):(
       <div className='item3'>
        <h2>Details Page For Post With ID {id}</h2>
       <img src={ `https://picsum.photos/200?random=(http://${productId})d`}  />
       <p className="name">Title: {title}</p>
       <p className="price">UserId: {userId}</p>
      
       <p className="category">Body: {body}</p>
    </div>
    )}

    </div>
  )
}

export default ProductDetail
