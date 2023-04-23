import "./index.html";
import "./style.scss";
import cat from "./img/photo-cat.jpg"
import {mult, sum} from "./modules/calc";

const imgWrap = document.querySelector(".img");
const img = new Image();
img.src = cat;
img.width = 500;
imgWrap.append(img);

console.log(mult(3, 4));
console.log(sum(3, 4));