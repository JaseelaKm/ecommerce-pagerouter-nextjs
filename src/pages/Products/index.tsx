import React, { useEffect, useState } from "react";
import { ProductServices } from "@/services/Product-services";
import ProductCard from "@/components/productCard/ProductCard";

function Products() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await ProductServices.getProducts();
        setData(productData);
      } catch (error) {
        console.error("error in products page", error);
      }
    };
    fetchData();
  }, []);

  //console.log("product page data",data)
  return (
    <div>
      <div className="row">
        <div className="col-1">
          
        </div>
        <div className="col-11 d-flex flex-row flex-wrap m-3 gap-3">
          {data.map((pd: any) => (
            <ProductCard key={pd.id} data={pd} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
