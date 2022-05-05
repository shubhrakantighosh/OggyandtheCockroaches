 
  document.querySelector("form").addEventListener("submit",loginpage)
  function loginpage(){
      var pass=document.querySelector("#pass").value 
      var email=document.querySelector("#email").value 
      var data=JSON.parse(localStorage.getItem("signupids"))
      
  }