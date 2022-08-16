import aboutContent from './about.js';

import firstLoad from './firstLoad';

firstLoad();

const main = document.createElement("div");
main.setAttribute("id", "main");
document.getElementById("content").appendChild(main);

aboutContent();