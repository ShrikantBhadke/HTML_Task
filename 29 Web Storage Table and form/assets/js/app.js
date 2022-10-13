const submitForm = document.getElementById("submitForm");
const fnameControle = document.getElementById("fname");
const lnameControle = document.getElementById("lname");
const emailControle = document.getElementById("email");
const contactControle = document.getElementById("contact");
const tableContent = document.getElementById("tableContent");
let stdArray = [];
const onSubmitForm = (event) => {
  event.preventDefault();
  let obj = {
    fname: fnameControle.value,
    lname: lnameControle.value,
    email: emailControle.value,
    contact: contactControle.value,
  };
  stdArray.push(obj);

  let row = document.createElement("tr");

  stdArray.forEach(function (obj, i) {
    let SrNo = document.createElement("td");
    let fname = document.createElement("td");
    let lname = document.createElement("td");
    let email = document.createElement("td");
    let contact = document.createElement("td");
    SrNo.appendChild(document.createTextNode(i + 1));
    fname.appendChild(document.createTextNode(obj.fname));
    lname.appendChild(document.createTextNode(obj.lname));
    email.appendChild(document.createTextNode(obj.email));
    contact.appendChild(document.createTextNode(obj.contact));

    row.appendChild(SrNo);
    row.appendChild(fname);
    row.appendChild(lname);
    row.appendChild(email);
    row.appendChild(contact);
  });
  console.log(row);
  tableContent.appendChild(row);

  event.target.reset();
};
submitForm.addEventListener("submit", onSubmitForm);

// let result = "";

// stdArray.forEach((ele,i)=>{
//   result += `
//           <tr>
//               <td>${i + 1}</td>
//               <td>${ele.fname}</td>
//               <td>${ele.lname}</td>
//               <td>${ele.email}</td>
//               <td>${ele.contact}</td>
//           </tr>
//   `
// })
// tableContent.innerHTML = result;
