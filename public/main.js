let val;
const payload = JSON.parse(sessionStorage.getItem("payload"));
console.log(payload)
if (payload) {
// If the payload is available then console.log the payload
axios.get("http://localhost:3000/getpayload-contact",{
  params:{
    email:payload.identifier
  }
}).then((response)=>{
  if(response.data.found==false)
  {




window.location.href="\login"
  }
  else
  {
    const user_name=document.getElementById('name')
    const no =document.getElementById('no')

    const city =document.getElementById('city')

    const mail =document.getElementById('mail')

    user_name.innerHTML=response.data.user;
    no.innerHTML=response.data.phonenumber;
    city.innerHTML=response.data.city;
    mail.innerHTML=response.data.email;
    const btn =document.getElementById('btn')
    btn.innerHTML="Logout";
    btn.onclick=logout;


  console.log(response.data)
    val=response.data
  

   
  }
}).catch((err)=>{
  console.log(err)
})

} else {
// If the payload isn't available, that means the user hasn't logged in yet.
// So redirecting back to "/login"window.location.href="\login"

}

