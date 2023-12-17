const form = document.querySelector('form')
const email = document.getElementById('email')
const password = document.getElementById('password')

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    fetch('http://localhost:3000/api/user/login',{
        method:'POST',
        body:JSON.stringify({
            email:email.value,
            password:password.value,
        }),
       
        headers:{
            "Content-Type": "application/json",
        }
    }).then(async (res)=>{
        const token = await res.text()
        // localStorage.setItem('token', token)
        document.cookie = 'token=' + token
        console.log('token', token)
        window.location.href = 'http://localhost:3000/'
    })
    .catch((err)=>{
        //console.log('token',token)
        console.error(err)
    })
})