
import "./index.css";

const root = document.querySelector("#root");

import image from './todo.png';
const logo = document.querySelector("#logo");
const img = document.createElement("img");
img.setAttribute("src",image);

logo.append(img)

document.querySelector("#submit").addEventListener("click",add);

function add(){
    document.querySelector("#bottom").innerHTML="";
    const todo = document.querySelector("#todo").value;
    
    const h = document.createElement("h1");
    h.textContent =`${todo}`;
    document.querySelector("#bottom").append(h);
}