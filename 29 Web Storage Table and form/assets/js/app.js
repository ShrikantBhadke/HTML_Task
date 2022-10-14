const submitForm = document.getElementById("submitForm");
const fnameControle = document.getElementById("fname");
const lnameControle = document.getElementById("lname");
const emailControle = document.getElementById("email");
const contactControle = document.getElementById("contact");
const tableContent = document.getElementById("tableContent");
let stdArray = [];

const ondataEdit = (event)=>{
  console.log("triger")
  
}
const onSubmitForm = (event) => {
  event.preventDefault();
  let obj = {
    fname: fnameControle.value,
    lname: lnameControle.value,
    email: emailControle.value,
    contact: contactControle.value,
  };
  stdArray.push(obj);
  localStorage.setItem("stdData", JSON.stringify(stdArray));
  let row = document.createElement("tr");
  row.innerHTML = `
                <td>${stdArray.length}</td>
                <td>${obj.fname}</td>
                <td>${obj.lname}</td>
                <td>${obj.email}</td>
                <td>${obj.contact}</td>
                <td><button class="btn btn-primary" onclick="ondataEdit()">Edit</button></td>
                <td><button class="btn btn-danger">Delete</button></td>
  `;
  tableContent.appendChild(row);
  event.target.reset();
};

submitForm.addEventListener("submit", onSubmitForm);
if (localStorage.getItem("stdData")) {
  tamplating(JSON.parse(localStorage.getItem("stdData")));
}
function tamplating(arr) {
  let result = "";

  arr.forEach((ele, i) => {
    result += `
            <tr>
                <td>${i + 1}</td>
                <td>${ele.fname}</td>
                <td>${ele.lname}</td>
                <td>${ele.email}</td>
                <td>${ele.contact}</td>
                <td><button class="btn btn-primary" onclick="ondataEdit()">Edit</button></td>
                <td><button class="btn btn-danger">Delete</button></td>
            </tr>
    `;
  });
  tableContent.innerHTML = result;
}













































// stdArray.forEach((ele,i)=>{
//   let data = row.appendChild(document.createElement("td"))
//   data.appendChild(document.createTextNode(i+1))
//   data.appendChild(document.createTextNode(ele.fname))
//   data.appendChild(document.createTextNode(ele.lname))
//   data.appendChild(document.createTextNode(ele.email))
//   data.appendChild(document.createTextNode(ele.contact))
// })

//   let SrNo = document.createElement("td");
//   let fname = document.createElement("td");
//   let lname = document.createElement("td");
//   let email = document.createElement("td");
//   let contact = document.createElement("td");
//   SrNo.appendChild(document.createTextNode(stdArray.length));
//   fname.appendChild(document.createTextNode(obj.fname));
//   lname.appendChild(document.createTextNode(obj.lname));
//   email.appendChild(document.createTextNode(obj.email));
//   contact.appendChild(document.createTextNode(obj.contact));
//   row.appendChild(SrNo);
//   row.appendChild(fname);
//   row.appendChild(lname);
//   row.appendChild(email);
//   row.appendChild(contact);
// console.log(row);
