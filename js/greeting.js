const loginForm = document.querySelector(".login-form")
const loginInput = document.querySelector(".login-form input")
const greeting = document.getElementById("greeting")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"
const savedUsername = localStorage.getItem(USERNAME_KEY);


function paintGreeting(username) {
    loginForm.classList.add(HIDDEN_CLASSNAME)
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `${username}, Just Do It!!!`
}
if(savedUsername !== null) {
    paintGreeting(savedUsername);
}
else {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",function(event) {
    event.preventDefault();
    localStorage.setItem(USERNAME_KEY,loginInput.value)
    paintGreeting(localStorage.getItem(USERNAME_KEY))
})   

}



