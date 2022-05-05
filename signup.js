document.querySelector("button").addEventListener("click",myfun)
    var signupid=JSON.parse(localStorage.getItem("signupids"))||[]
   
    function myfun(){
    var Email =document.querySelector("#email").value
    var Phone =document.querySelector("#phone").value
    var Pass =document.querySelector("#pass").value
 
     var obj={
          
    email:Email,
    phone:Phone,
    pass:Pass
     }
     signupid.push(obj)
     localStorage.setItem("signupids",JSON.stringify(signupid))
  }