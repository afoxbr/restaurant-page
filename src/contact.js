function contactContent() {
    //this function creates the contact content
    const subtitle = document.createElement("h3");
    subtitle.innerHTML = "Contact Us";
    document.getElementById("content").appendChild(subtitle);

    const details = document.createElement("ul");
    document.getElementById("content").appendChild(details);

    const address = document.createElement("li");
    address.innerHTML = "Address:\n8140 Leslie Rd\nRichmond\nBritish Columbia\nV6X 4A8\nCanada";
    details.appendChild(address);

    const phone = document.createElement("li");
    phone.innerHTML = "Phone number\n(604) 276-8282";
    details.appendChild(phone);

    const email = document.createElement("li");
    email.innerHTML = "Email\nchris@milkshack.com";
    details.appendChild(email);
}

export default contactContent;