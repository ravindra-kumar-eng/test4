import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () => {

    const products=useSelector((state)=>state.allProducts.products)
    console.log(products);
    const renderList=products.map((product)=>{
        const {id,title,userId,body}=product;
        const image=`https://picsum.photos/200?random=(http://${id})d`;
        // console.log(image);
        return(
        <div className='item'key={id}>
            <Link to={`/product/${id}`}>
       <img src={image} alt={title} />
       <p className="name">Title: {title.slice(0,14)}...</p>
       <p className="price">UserId: {userId}</p>
       <p className="category">Body: {body.slice(0,18)}</p>
       <p>Read More...</p>
       </Link>
    </div>
        )

    })
    // console.log(products);
    // const {id,title}=products[0];

    return<div className='product'>
        
         {renderList}
      
    </div>

     
}

export default ProductComponent
