function firstLoad() {
    const controlPanel = document.createElement("div");
    controlPanel.classList.add("controlPanel");
    document.getElementById("content").appendChild(controlPanel);

    const aboutTab = document.createElement("div");
    aboutTab.classList.add("tab");
    aboutTab.innerHTML = ("About");
    aboutTab.addEventListener("click", () => {
        aboutContent();
        aboutTab.classList.add("active");
        menuTab.classList.remove("active");
        contactTab.classList.remove("active");
    });

    const contactTab = document.createElement("div");
    contactTab.classList.add("tab");
    contactTab.innerHTML = ("Contact");
    contactTab.addEventListener("click", () => {
        contactContent();
        contactTab.classList.add("active");
        aboutTab.classList.remove("active");
        menuTab.classList.remove("active");
    });

    const menuTab = document.createElement("div");
    menuTab.classList.add("tab");
    menuTab.innerHTML = ("Menu");
    menuTab.addEventListener("click", () => {
        menuContent();
        menuTab.classList.add("active");
        contactTab.classList.remove("active");
        aboutTab.classList.remove("active");
    });
};

export default firstLoad;