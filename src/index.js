const title = document.createElement("h2");
title.innerHTML = "Welcome to Chris' Milk Shack!";
document.getElementById("content").appendChild(title);

const icon = document.createElement("img");
icon.src="../src/assets/20220810_201741_0000.png";
icon.setAttribute("height", "480px");
icon.setAttribute("width", "480px");
document.getElementById("content").appendChild(icon);

const blurb = document.createElement("p");
blurb.innerText = "Chris' Milk Shack is Canada's premium outlet for mammal juice of all varieties! Cow? You bet! Goat? Of course! Human? As long as you don't ask where we got it!";
document.getElementById("content").appendChild(blurb);