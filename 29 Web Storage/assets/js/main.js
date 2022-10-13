const para = document.getElementById("info")

let userinfo = "jonha"
let id ="Hallo World";
console.log(id);
localStorage.setItem("dataid",id);
sessionStorage.setItem("userinfodata",userinfo);

para.innerHTML = sessionStorage.getItem("userinfodata");