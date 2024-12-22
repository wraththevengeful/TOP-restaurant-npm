import logoMouse from "./assets/logoMouse.jpg";
import "./css/styles.css";
export default function displayHome(){
    // The title h1
    const contentDiv = document.getElementById("content");
    contentDiv.replaceChildren();


    let name = document.createElement("h1");
    let nameText = document.createTextNode("Eli Foods");
    name.appendChild(nameText);
    contentDiv.append(name);

    // The h2
    let slogan = document.createElement('h2');
    let sloganText = document.createTextNode("We serve Italian food and love!");
    slogan.appendChild(sloganText);
    contentDiv.append(slogan);

    // Our logo
    let logo = document.createElement('img');
    logo.src = logoMouse;
    contentDiv.append(logo);
    
    // End text
    let para = document.createElement('p');
    let paraText = document.createTextNode("Our chefs Rocks!");
    para.appendChild(paraText);
    contentDiv.append(para);
}