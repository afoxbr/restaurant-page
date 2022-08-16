function aboutContent() {
    const main = document.getElementById("main");
    //Removes previous DOM content
    main.innerHTML = '';
    //This function adds the about page content
    const title = document.createElement("h2");
    title.innerHTML = "Welcome to Chris' Milk Shack!";
    main.appendChild(title);

    const icon = document.createElement("img");
    icon.src = "../src/assets/20220810_201741_0000.png";
    icon.setAttribute("height", "480px");
    icon.setAttribute("width", "480px");
    main.appendChild(icon);

    const blurb = document.createElement("p");
    blurb.innerText = "Chris' Milk Shack is Canada's premium outlet for mammal juice of all varieties! Cow? You bet! Goat? Of course! Human? As long as you don't ask where we got it!";
    main.appendChild(blurb);
}

export default aboutContent;