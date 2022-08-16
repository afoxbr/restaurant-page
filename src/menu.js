function menuContent() {
    const main = document.getElementById("main");
    //Removes previous DOM content
    main.innerHTML = '';
    //Adds menu content    
    const menuTitle = document.createElement("h3");
    menuTitle.innerHTML = "Menu";
    main.appendChild(menuTitle);

    const basicMilk = document.createElement("div");
    basicMilk.classList.add("recipeCard");
    main.appendChild(basicMilk);

    const basicMilkTitle = document.createElement("h4");
    basicMilkTitle.innerHTML = "Milk";
    basicMilk.appendChild(basicMilkTitle);

    const basicBlurb = document.createElement("p");
    basicBlurb.innerHTML = "Unflavoured milk from cow, goat, or surprise mammal.\n$45";
    basicMilk.appendChild(basicBlurb);

    const flavouredMilk = document.createElement("div");
    flavouredMilk.classList.add("recipeCard");
    main.appendChild(flavouredMilk);

    const flavouredMilkTitle = document.createElement("h4");
    flavouredMilkTitle.innerHTML = "Flavoured Milk";
    flavouredMilk.appendChild(flavouredMilkTitle);

    const flavouredBlurb = document.createElement("p");
    flavouredBlurb.innerHTML = "As above, but flavoured with chocolate, strawberry, poutine, or moose.\n$65";
    flavouredMilk.appendChild(flavouredBlurb);
}

export default menuContent;