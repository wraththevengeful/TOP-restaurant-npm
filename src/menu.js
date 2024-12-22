    export default function displayMenu(specials){
        const contentDiv = document.getElementById("content");
        contentDiv.replaceChildren();

        const dailyMenu = ["Coffee : 15INR","Tea : 15INR","Biscuits : 10INR","Croissant : 20INR","Latte : 20INR"];

        // Everyday Menu
        const routineDiv = document.createElement('div');
        const routineTitle = document.createElement('h2');
        const routineTitleText = document.createTextNode("Our Daily Menu");
        routineTitle.appendChild(routineTitleText);
        routineDiv.append(routineTitle);
        const routineList = document.createElement('ol');
        routineList.setAttribute('type','1');
        dailyMenu.forEach(element => {
            let listElement = document.createElement("li");
            let listElementText = document.createTextNode(element);
            listElement.appendChild(listElementText);
            routineList.append(listElement);
        });
        routineDiv.append(routineList);
        contentDiv.append(routineDiv);

        // Specials Menu
        const specialsDiv = document.createElement("div");
        const specialsTitle = document.createElement('h2');
        const specialsTitleText = document.createTextNode("Our specials Menu");
        specialsTitle.appendChild(specialsTitleText);
        specialsDiv.append(specialsTitle);
        const specialsList = document.createElement("ol");
        specialsList.setAttribute('type','1');
        specials.forEach(element=>{
            let listElement = document.createElement("li");
            let listElementText = document.createTextNode(element);
            listElement.appendChild(listElementText);
            specialsList.append(listElement);
        });
        specialsDiv.append(specialsList);
        contentDiv.append(specialsDiv);
    };