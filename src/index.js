import displayHome from "./home";
import displayMenu from "./menu";
import displayAbout from "./about";

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about");

let specials = ["Biriyani : 120INR", "Cheese Pasta : 120INR"];

homeButton.addEventListener('click',()=>{
    displayHome();
});

menuButton.addEventListener('click',()=>{
    displayMenu(specials);
});

aboutButton.addEventListener('click',()=>{
    displayAbout();
})