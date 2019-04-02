function get_data() {
  var data = {
    firstname: document.getElementById("firstname").value,
    lastname: document.getElementById("lastname").value,
    age: document.getElementById("age").value,
    dob: document.getElementById("dob").value,
    email: document.getElementById("email").value,
    address: document.getElementById("address").value,
    pincode: document.getElementById("pincode").value,
    district: document.getElementById("district").value,
    place: document.getElementById("place").value,
    qualification: document.getElementById("qualification").value,
    guardian: document.getElementById("guardian").value,
    mobile: document.getElementById("mobile").value,
    // gender : document.getElementById("gender").value,
    religion: document.getElementById("religion").value,
    blood_group: document.getElementById("blood_group").value,
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
    confirm_password: document.getElementById("confirm_password").value
  };

  console.log(data);
}

function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username == "" || username == " ") {
    a = document.getElementById("usernamehelpid")
    a.innerText ="username will be not null"
    a.classList.add("text-danger")

  } else {
  }
  if (password == "" || password == " ") {
    document.getElementById("passwordhelpid").innerText =
      "password will be not null".classList.add("text-danger")
  } else {
  }
}
