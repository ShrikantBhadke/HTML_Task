const toggleBtn = document.getElementById("toggleBtn")
const navBarDiv = document.getElementById("nav");

const navbartoggle = (event)=>{
navBarDiv.classList.toggle("show");
event.target.classList.toggle("fa-xmark")
event.target.classList.toggle("fa-bars")

}



toggleBtn.addEventListener("click", navbartoggle)