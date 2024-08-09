burger=document.querySelector('.burger')
navbarItems=document.querySelector('.navbar-items')
nav=document.querySelector('.nav')

burger.addEventListener('click',()=>{
   navbarItems.classList.toggle('h-class')
   nav.classList.toggle('v-class')
})
    function data(){
   let a = document.getElementById("NAME-").value;
   let c = document.getElementById("EMAIL-").value;
   let d = document.getElementById("NUMBER-").value;
   let f = document.getElementById("TEXT-A").value;
   

   if(a=="" ||  c==""|| d=="" || f==""){
      alert("Please Fill All Fields");
      return false;
   }
   else if(a.length <3){
      alert("Name is too short ! Name Should Be minimun 3 alphabets")
      return false;
   }
   else if(d.length < 11|| d.length >11){
      alert("Please entre a Valid Number ,Number Should be of 11 digits");
      return false;
   }
   else if(c.length<12){
alert("Please Enter a valid email , minimum should be 12 alphabets")
return false;
   }
   else{
      Swal.fire({
         title: "Okie Please Wait",
         text: "Waiting For Our call",
         icon: "success"
      });
   
   };

  
   
}