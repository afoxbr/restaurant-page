function contactContent() {
    const main = document.getElementById("main");
    //Removes previous DOM content
    main.innerHTML = '';
    //this function creates the contact content
    const subtitle = document.createElement("h3");
    subtitle.innerHTML = "Contact Us";
    main.appendChild(subtitle);

    const details = document.createElement("ul");
    main.appendChild(details);

    const address = document.createElement("li");
    address.innerHTML = "<b>Address</b><br>8140 Leslie Rd<br>Richmond<br>British Columbia<br>V6X 4A8<br>Canada";
    details.appendChild(address);

    const phone = document.createElement("li");
    phone.innerHTML = "<b>Phone number</b><br>(604) 276-8282";
    details.appendChild(phone);

    const email = document.createElement("li");
    email.innerHTML = "<b>Email</b><br>chris@milkshack.com";
    details.appendChild(email);
}

export default contactContent;