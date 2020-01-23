let namePattern = /^[A-z]{1,20}$/;
let mailPattern = /^[A-z0-9_]{2,}@[A-z]{2,8}[.]{1}[A-z.]{2,}$/;
let numPattern = /^[789][0-9]{9}$/;
let addPattern = /^[A-z0-9\s,.'-]{3,}$/;

let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let mail = document.getElementById("mail");
let num = document.getElementById("num");
let addrs = document.getElementById("addrs");
let date = document.getElementById("dob");
let fyl = document.getElementById("file");

function validate() {
  if (
    fname.value.match(namePattern) &&
    lname.value.match(namePattern) &&
    mail.value.match(mailPattern) &&
    num.value.match(numPattern) &&
    addrs.value.match(addPattern) &&
    date.value != "" &&
    fyl.value != ""
  ) {
    return true;
  } else {
    return false;
  }
}

document.addEventListener("submit", function() {
  if (validate() == false) {
    alert("Please fill the FEILDS with valid Inputs");
    let inp = document.getElementsByTagName("input");
    let txtArea = document.getElementsByTagName("textarea")[0];

    if (txtArea.value == "") {
      txtArea.style.borderColor = "red";
    }
    for (let i = 0; i <= inp.length; i++) {
      if (inp[i].value == "") {
        inp[i].style.borderColor = "red";
      }
    }
  }
  else{
    alert("Form Submitted");
  }
});

fname.addEventListener("input", function(event) {
  if (event.target.value.match(namePattern)) {
    fname.style.borderColor = "black";
    document.getElementById("fnameWarn").innerHTML = "";
  } else {
    fname.style.borderColor = "red";
    document.getElementById("fnameWarn").innerHTML =
      "Please fill the field with A-z ";
  }
});

lname.addEventListener("input", function(event) {
  if (event.target.value.match(namePattern)) {
    lname.style.borderColor = "black";
    document.getElementById("lnameWarn").innerHTML = "";
  } else {
    lname.style.borderColor = "red";
    document.getElementById("lnameWarn").innerHTML =
      "Please fill the field with A-z ";
  }
});

mail.addEventListener("input", function(event) {
  if (event.target.value.match(mailPattern)) {
    mail.style.borderColor = "black";
    document.getElementById("mailWarn").innerHTML = "";
  } else {
    mail.style.borderColor = "red";
    document.getElementById("mailWarn").innerHTML =
      "Please fill the field with a vaild Email Address ";
  }
});

num.addEventListener("input", function(event) {
  if (event.target.value.match(numPattern)) {
    num.style.borderColor = "black";
    document.getElementById("numWarn").innerHTML = "";
  } else {
    num.style.borderColor = "red";
    document.getElementById("numWarn").innerHTML =
      "Please fill the field with a valid Phone Number";
  }
});

addrs.addEventListener("input", function(event) {
  if (event.target.value.match(addPattern)) {
    addrs.style.borderColor = "black ";
    document.getElementById("addrsWarn").innerHTML = "";
  } else {
    addrs.style.borderColor = "red";
    document.getElementById("addrsWarn").innerHTML =
      "Allowed Charc 'A-z' '0-9' '-,.'  ";
  }
});

date.addEventListener("change", function(event) {
  if (event.target.value != "") {
    date.style.borderColor = "black";
  }
});

fyl.addEventListener("change", function(event) {
  if (fyl.files.length > 0) {
    let fsize = fyl.files.item(0).size;
    let file = Math.round(fsize / 1024);
    if (file > 2048) {
      alert("File too Big, please select a file less than 2mb");
      fyl.value = "";
    } else {
      fyl.style.borderColor = "black";
    }
  }
});
