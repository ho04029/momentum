const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const popup = document.querySelector('.popup-wrap');
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function loginSubmit(event){
    event.preventDefault(); 
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
}

function paintGreeting(username){
    popup.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello, ${username}`
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    popup.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginSubmit);
}else{
    paintGreeting(savedUsername);
}