//DOM Element
const body = document.body;

const main = document.createElement("main");
body.appendChild(main);

const header = document.createElement("header");
main.appendChild(header);

const h1_header = document.createElement("h1");
h1_header.innerText = "Our Reviews";
header.appendChild(h1_header);

const section = document.createElement("section");
main.appendChild(section);

const pic_container = document.createElement("div");
pic_container.classList.add("pic-container");
section.appendChild(pic_container);

const h5_section = document.createElement("h5");
h5_section.innerText = "Susan Smith";
section.appendChild(h5_section);

const h6_section = document.createElement("h6");
h6_section.innerText = "WEB DEVELOPER";
section.appendChild(h6_section);

const p_section = document.createElement("p");
p_section.innerText =
  "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry";
section.appendChild(p_section);

const pagetion_section = document.createElement("div");
pagetion_section.classList.add("pagetion-section");
section.appendChild(pagetion_section);

const button_forward_pagetion = document.createElement("button");
button_forward_pagetion.setAttribute("id", "btn1");
button_forward_pagetion.innerHTML = "&#xf053";
pagetion_section.appendChild(button_forward_pagetion);

const button_backward_pagetion = document.createElement("button");
button_forward_pagetion.setAttribute("id", "btn3");
button_backward_pagetion.innerHTML = "&#xf054";
pagetion_section.appendChild(button_backward_pagetion);

const button_section = document.createElement("button");
button_section.setAttribute("id", "btn4");

button_section.innerText = "Surprice Me";
section.appendChild(button_section);

//End of DOM Element
