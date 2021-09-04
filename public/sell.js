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





window.location.href="/login"
  }
  else
  {
  console.log(response.data)
    val=response.data
  
const email=document.getElementById('email')
email.value=val.email
const city=document.getElementById('city')
city.value=val.city
const phnnumber=document.getElementById('phnnumber')
phnnumber.value=val.phonenumber
   
  }
}).catch((err)=>{
  console.log(err)
})

} else {
// If the payload isn't available, that means the user hasn't logged in yet.
// So redirecting back to "/login"
window.location.href = "/login";
}

