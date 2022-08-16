import aboutContent from "./about";
import menuContent from "./menu";
import contactContent from "./contact";

function firstLoad() {
    const controlPanel = document.createElement("div");
    controlPanel.classList.add("controlPanel");
    document.getElementById("content").appendChild(controlPanel);

    const aboutTab = document.createElement("button");
    aboutTab.classList.add("tab");
    aboutTab.innerHTML = ("About");
    controlPanel.appendChild(aboutTab);
    aboutTab.addEventListener("click", () => {
        aboutContent();
        aboutTab.classList.add("active");
        menuTab.classList.remove("active");
        contactTab.classList.remove("active");
    });

    const contactTab = document.createElement("button");
    contactTab.classList.add("tab");
    contactTab.innerHTML = ("Contact");
    controlPanel.appendChild(contactTab);
    contactTab.addEventListener("click", () => {
        contactContent();
        contactTab.classList.add("active");
        aboutTab.classList.remove("active");
        menuTab.classList.remove("active");
    });

    const menuTab = document.createElement("button");
    menuTab.classList.add("tab");
    menuTab.innerHTML = ("Menu");
    controlPanel.appendChild(menuTab);
    menuTab.addEventListener("click", () => {
        menuContent();
        menuTab.classList.add("active");
        contactTab.classList.remove("active");
        aboutTab.classList.remove("active");
    });
};

export default firstLoad;