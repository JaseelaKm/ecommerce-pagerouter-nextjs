"use client";
import { useCart } from "@/services/CartContext";
import { ProductServices } from '@/services/Product-services';

const AddToCart=(props:any)=>{
    console.log("add to cart props",props);
    const {setCartItems}=useCart();
    const addTocart=async(prodId:any)=>{
        try{
            const responce=await ProductServices.addToCart(prodId);
            const data=await responce.json();
            setCartItems(data.line_items);

        }catch(error){
            console.error("addto cart error",error);
        }
    };

    return(
        <div>
            <button className="btn btn-primary fw-semibold" onClick={(()=>addTocart(props.prodId))}>Add To Cart</button>
        </div>
    )

}

export default AddToCart;