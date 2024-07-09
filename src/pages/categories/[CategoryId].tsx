"use client";
import { ProductServices } from '@/services/Product-services';

import Link from "next/link";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


function CategoryProducts(props:any) {
    console.log("category page",props)
    const route=useRouter();
    const {CategoryId}=route.query;
    console.log(CategoryId)


    const [categoriesName,setCategoriesName] = useState('');
    const [categoryData,setCategoryData] = useState([]);
    

    useEffect(() => {
        const fetchProducts = async () => {
            const categoryData = await ProductServices.getProducts();
            setCategoryData(categoryData);
        }
        fetchProducts();
    },[]);
    useEffect(()=>{
      const fetchCategoryData = async () =>{
          const categoryName = await ProductServices.getCategory(CategoryId);
          setCategoriesName(categoryName);
      }
      fetchCategoryData();
  },[CategoryId]);


//store filtered products
const [filterCategoryProducts, setFilterCategoryProducts] = useState([]);

useEffect(() => {
    const filteredProducts = categoryData.filter((d:any) => {
        return d.categories[0]?.slug === categoriesName;
    });
    setFilterCategoryProducts(filteredProducts)
}, [categoryData, categoriesName]);

    
    
   // const filteredProducts=categoryData.filter((d:any)=>{
   //     return d.categories[0]?.slug === categoriesName;
   // })
   // console.log("filterproducts",filteredProducts)

    return ( <>
    <div className="mt-4 mb-2 ps-5 fw-semibold fs-2 text-danger text-uppercase text-center">{categoriesName}</div>
    <div className="d-flex flex-wrap justify-content-center gap-4  mb-5">
        {
           filterCategoryProducts.map((fl:any)=>{
                return(
                    <Link href={'/Products/'+fl.id} style={{textDecoration:'none'}}>
                        <div className="card mb-3" style={{maxWidth:540}}>
  <div className="row g-0">
    <div className="col-md-4">
    <img src={fl.image.url} className="img-fluid rounded-start mt-3" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{fl.name}</h5>
        <p className="card-text">{fl.description}</p>
        <p className="card-text fw-bold">${fl.price.raw}</p>
      </div>
    </div>
  </div>
</div>
                    </Link>

                )
            })
        }
    </div>
    
    </> 
    
    );
}

export default CategoryProducts;