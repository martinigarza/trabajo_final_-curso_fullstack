const removeProductToCart = async (productId)=>{
    const data = await fetch('http://localhost:3000/api/cart',{
    method:'DELETE',
    body:JSON.stringify({
        productId:productId
    }),
    headers:{
        "Content-Type": "application/json"
    }
}

)
window.location.reload()

}