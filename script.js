const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const sigIn=document.querySelector(".sign-in");
let log_in=document.querySelector("#log-In");
let sign_up=document.querySelector("#sign-Up");

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
    sigIn.style.display="none";
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
    sigIn.style.display="block";
});


// Log-In Portion

log_in.addEventListener("submit", (e) => {
    e.preventDefault();
    let username = e.target.querySelector("#username").value;
    let passWord = e.target.querySelector("#password").value;

    let numInUsername = false;
    let charInUsername = false;
    let charInPassword = false;
    for (let i = 1; i < username.length; i++) {
      if (username[i] >= 0 && username[i] <= 9) {
        numInUsername = true;
      }
      if (
        (username.charCodeAt(i) >= 32 && username.charCodeAt(i) <= 47) ||
        (username.charCodeAt(i) >= 58 && username.charCodeAt(i) <= 64) ||
        (username.charCodeAt(i) >= 91 && username.charCodeAt(i) <= 96) ||
        (username.charCodeAt(i) >= 123 && username.charCodeAt(i) <= 126)
      ) {
        charInUsername = true;
      }
    }
    for (let i = 0; i < passWord.length; i++) {
      if (
        (passWord.charCodeAt(i) >= 32 && passWord.charCodeAt(i) <= 47) ||
        (passWord.charCodeAt(i) >= 58 && passWord.charCodeAt(i) <= 64) ||
        (passWord.charCodeAt(i) >= 91 && passWord.charCodeAt(i) <= 96) ||
        (passWord.charCodeAt(i) >= 123 && passWord.charCodeAt(i) <= 126)
      ) {
        charInPassword = true;
      }
    }
    if (username.length < 8 || !numInUsername || !charInUsername || !(passWord.length >= 8 || passWord.length <= 20) || !charInPassword) {
      alert("Invalid Username or Password");
      alert("Usename or Password must have the following:\n1:Username must contain atleast 8 characters.\n2:Username must have 1 digit.\n3:Username must have a special character.\n4:Password length should be between 8 and 20 characters.\n5:Password must contains a Special Character.");
    }
    else {
        alert("LogIn Successful...")
        alert("Welcome Back.!")
        e.target.querySelector("#username").value = "";
        e.target.querySelector("#password").value = "";
    }

  });


//   Sign_In Portion


sign_up.addEventListener("submit", (e) => {
    e.preventDefault();
    let username = e.target.querySelector("#sign-up_username").value;
    let email = e.target.querySelector("#email").value;
    let passWord = e.target.querySelector("#sign-up_password").value;
    // console.log("hello There")
    let numInUsername = false;
    let charInUsername = false;
    let charInPassword = false;
    for (let i = 1; i < username.length; i++) {
      if (username[i] >= 0 && username[i] <= 9) {
        numInUsername = true;
      }
      if (
        (username.charCodeAt(i) >= 32 && username.charCodeAt(i) <= 47) ||
        (username.charCodeAt(i) >= 58 && username.charCodeAt(i) <= 64) ||
        (username.charCodeAt(i) >= 91 && username.charCodeAt(i) <= 96) ||
        (username.charCodeAt(i) >= 123 && username.charCodeAt(i) <= 126)
      ) {
        charInUsername = true;
      }
    }
    for (let i = 0; i < passWord.length; i++) {
      if (
        (passWord.charCodeAt(i) >= 32 && passWord.charCodeAt(i) <= 47) ||
        (passWord.charCodeAt(i) >= 58 && passWord.charCodeAt(i) <= 64) ||
        (passWord.charCodeAt(i) >= 91 && passWord.charCodeAt(i) <= 96) ||
        (passWord.charCodeAt(i) >= 123 && passWord.charCodeAt(i) <= 126)
      ) {
        charInPassword = true;
      }
    }
    if (username.length < 8 || !numInUsername || !charInUsername || !(passWord.length >= 8 && passWord.length <= 20) || !charInPassword) {
      alert("Usename & Password must have the following:\n1:Username must contain atleast 8 characters.\n2:Username must have 1 digit.\n3:Username must have a special character.\n4:Password length should be between 8 and 20 characters.\n5:Password must contains a Special Character.");
    }
    else {
    alert("Account Created...");
    alert(`Username: ${username}\nPassword: ${passWord}`);
    container.classList.remove("active");
    sigIn.style.display="block";
    }
  });
