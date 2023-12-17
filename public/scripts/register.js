const form = document.querySelector('form')
const nombre = document.getElementById('nombre')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')
const photoURL = document.getElementById('photo')

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    if(password.value === confirmPassword.value){
        fetch('http://localhost:3000/api/user/register',{
            method:'POST',
            body:JSON.stringify({
                email:email.value,
                password:password.value,
                photo:photoURL.value,
                name:nombre.value
            }),
            headers:{
                "Content-Type": "application/json",
            }
        }).then((res)=>{
            console.log('res',res)
        })
    }else{
        document.getElementById("passwords-no-match").style.display= 'block'
    }
})