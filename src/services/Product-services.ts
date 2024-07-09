export class ProductServices{
    static getProducts = async () => {
        try{
            let productsResponse = await fetch('https://api.chec.io/v1/products', {
            method: "GET",
            headers: {
                'X-Authorization': 'pk_55345b039caf09fb9c305cfbc02ef419fa6efd45af776',
            }
            });
            const data = await productsResponse.json();
            return data.data;
        }catch(error){
            console.log('Something wrong',error);   
        }
    }
    static getProductById = async (id:any) => {
        try{
            let productsResponse = await fetch('https://api.chec.io/v1/products/'+id, {
            method: "GET",
            headers: {
                'X-Authorization': 'pk_55345b039caf09fb9c305cfbc02ef419fa6efd45af776',
            }
            });
            const data = await productsResponse.json();
            return data;
        }catch(error){
            console.log('Something wrong',error);
        }
    }
    static getCategory = async (id:any) => {
        try {
            const response = await fetch('https://api.chec.io/v1/categories/'+id,{
                method: "GET",
                headers: {
                    'X-Authorization': 'pk_55345b039caf09fb9c305cfbc02ef419fa6efd45af776',
                    Accept: "application/json",
                            "Content-Type": "application/json",
                }
            });
            const data = await response.json();
            return data.slug;

        } catch (error) {
            console.error('An error occurred:', error);
        }
    }
    static addToCart = async (prodId:any) => {
        const response = await fetch("https://api.chec.io/v1/carts/cart_eN1ql92VXkwz3y", {
        method: "POST",
        headers: {
            "X-Authorization": "pk_55345b039caf09fb9c305cfbc02ef419fa6efd45af776",
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            "id": prodId,
            quantity: 1
        })
        })
        return response;
    }
    static removeCartItem = async (prodId:string) => {
        const response = await fetch(`https://api.chec.io/v1/carts/cart_eN1ql92VXkwz3y/items/${prodId}`, {
        method: "DELETE",
        headers: {
            "X-Authorization": "pk_55345b039caf09fb9c305cfbc02ef419fa6efd45af776",
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            cart_id:"cart_eN1ql92VXkwz3y",
            id: prodId
        })
        })
        const data = await response.json();
        return data;
    }
    static fetchingCartProducts = async () =>{
        const response = await fetch("https://api.chec.io/v1/carts/cart_eN1ql92VXkwz3y", {
          method: "GET",
          headers: {
              "X-Authorization": "pk_55345b039caf09fb9c305cfbc02ef419fa6efd45af776",
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
      })
      const data = await response.json();
      return data;
    }
}