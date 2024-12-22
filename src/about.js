export default function displayAbout() {
    const contentDiv = document.getElementById("content");
    contentDiv.replaceChildren();

    let deliveryServiceContact = ["Delivery", "044-123456"];
    let contactFields = ["Who?", "Mail", "Phone", "Contact hours"];
    let contacts = [
        ["Manager", "manager@elieats.com", "044-12345678", "10:00-17:00"],
        ["Supervisor", "supervisor@elieats.com", "044-12345679", "10:00-17:00"]
    ];

    // Create header for About Us
    const headTitle = document.createElement('h2');
    const headTitleText = document.createTextNode("About Us:");
    headTitle.appendChild(headTitleText);

    // Delivery section
    const deliveryServiceTitle = document.createElement('h2');
    const deliveryServiceTitleText = document.createTextNode("For Delivery:");
    deliveryServiceTitle.appendChild(deliveryServiceTitleText);

    const deliveryDiv = document.createElement("div");

    // Create Delivery Phone paragraph
    const deliveryPhone = document.createElement('p');
    deliveryPhone.textContent = "Delivery Phone: " + deliveryServiceContact[1];
    deliveryDiv.appendChild(deliveryServiceTitle);
    deliveryDiv.appendChild(deliveryPhone);

    // Create Contacts List
    const otherContacts = document.createElement('ul');
    otherContacts.setAttribute('type', 'circle');

    // Loop through contacts and create list items
    contacts.forEach(element => {
        let contact = document.createElement('li');
        contact.textContent = `${contactFields[0]} ${element[0]}\n${contactFields[1]} ${element[1]}\n${contactFields[2]} ${element[2]}\n${contactFields[3]} ${element[3]}`;
        otherContacts.appendChild(contact);
    });

    // Append the contacts list to the delivery div
    deliveryDiv.appendChild(otherContacts);

    // Append the whole delivery section to the contentDiv
    contentDiv.appendChild(deliveryDiv);
}
