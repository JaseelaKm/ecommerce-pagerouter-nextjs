import React from 'react';
import Link from 'next/link';

 function ProductCard(props:any) {
    
    const products=props.data;
    console.log("product card props",products)
  return (
    <div>
      <div className='gap-3'>
           <Link href={'/Products/'+products.id} style={{textDecoration:'none'}}>
                         
            <div className="card text-center pb-4" style={{width:240}}>
                <img src={products?.image?.url} className="card-img-top mt-2" alt="card image" height={200}/>
                <div className="card-body">
                  <h5 className="card-title fw-bold lead">{products?.name}</h5>
                   <p className="card-text fw-bold">${products?.price?.formatted}</p>
                  <button className='btn btn-success' >BUY NOW</button>
                   
                </div>
              </div>
                    </Link>
                
          
        
    </div>
    </div>
  )
}

export default ProductCard;
