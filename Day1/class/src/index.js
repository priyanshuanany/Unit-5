
import { sum } from "./calc";
import "./index.css";


console.log(sum(3,9));

console.log(sum(3,5));

const root = document.getElementById("root");

const h1 = document.createElement("h1");
h1.innerText = "WebPack";
// h1.classList.add("redtext");
h1.setAttribute("class","redtext")
root.append(h1);