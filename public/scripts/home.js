const addProductToCart = async(productId)=>{
    const data = await fetch('http://localhost:3000/api/cart',{
        method:'PUT',
        body:JSON.stringify({
            productId:productId
        }),
        headers:{
            "Content-Type": "application/json"
        }
    })
    console.log('data', data)
}