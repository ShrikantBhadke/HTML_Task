const toggleBtn = document.getElementById("toggleBtn");
const navBar = document.getElementById("nav")


const navtoggle = (event)=>{
    navBar.classList.toggle("show")
    event.target.classList.toggle("fa-xmark");
    event.target.classList.toggle("fa-bars");

}




toggleBtn.addEventListener("click",navtoggle)