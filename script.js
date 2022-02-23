import persons from "./person.js";

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
section.id = "";
main.appendChild(section);

const pic_container = document.createElement("div");
pic_container.classList.add("pic-container");
pic_container.style.backgroundImage = "";
section.appendChild(pic_container);

const h5_section = document.createElement("h5");
h5_section.innerText = "";
section.appendChild(h5_section);

const h6_section = document.createElement("h6");
h6_section.innerText = "";
section.appendChild(h6_section);

const p_section = document.createElement("p");
p_section.innerText = "";
section.appendChild(p_section);

const pagetion_section = document.createElement("div");
pagetion_section.classList.add("pagetion-section");
section.appendChild(pagetion_section);

const button_backward_pagetion = document.createElement("button");
button_backward_pagetion.setAttribute("id", "btn1");
button_backward_pagetion.innerHTML = "&#xf053";
pagetion_section.appendChild(button_backward_pagetion);

const button_forward_pagetion = document.createElement("button");
button_forward_pagetion.setAttribute("id", "btn3");
button_forward_pagetion.innerHTML = "&#xf054";
pagetion_section.appendChild(button_forward_pagetion);

const button_section = document.createElement("button");
button_section.setAttribute("id", "btn4");

button_section.innerText = "Surprice Me";
section.appendChild(button_section);

const sectionFooter = document.createElement("footer");
main.appendChild(sectionFooter);

const aFooter = document.createElement("a");
aFooter.setAttribute("href", "https://github.com/farshadjanmohammadi");
aFooter.setAttribute("target", "_blank");
aFooter.innerHTML = `Made with <i class="fas fa-heart"> </i>   by Farshad Janmohammadi`;
sectionFooter.appendChild(aFooter);

const Profile = class {
  constructor() {
    this.persons = persons;
  }

  ui(id, cat1, cat2) {
    id = id - 1;
    section.id = this.persons[id].id;
    pic_container.style.backgroundImage = this.persons[id].img;
    h5_section.innerText = this.persons[id].fullName;
    h6_section.innerText = this.persons[id].job;
    p_section.innerText = this.persons[id].twitt;
    button_forward_pagetion.style.cursor = cat1[0];
    button_forward_pagetion.style.color = cat1[1];
    button_backward_pagetion.style.cursor = cat2[0];
    button_backward_pagetion.style.color = cat2[1];
  }
};

const profile = new Profile();

//End of DOM Element

// Handler Function

const loadedHandler = () => {
  profile.ui(1, ["pointer", "#49a6e9"], ["default", "#102a42"]);
};

const forwardHandler = () => {
  if (section.id == 1) {
    profile.ui(2, ["pointer", "#49a6e9"], ["pointer", "#49a6e9"]);
  } else if (section.id == 2) {
    profile.ui(3, ["pointer", "#49a6e9"], []);
  } else if (section.id == 3) {
    profile.ui(4, ["default", "#102a42"], []);
  }
};

const backwardHandler = () => {
  if (section.id == 2) {
    profile.ui(1, [], ["default", "#102a42"]);
  } else if (section.id == 3) {
    profile.ui(2, [], ["pointer", "#49a6e9"]);
  } else if (section.id == 4) {
    profile.ui(3, ["pointer", "#49a6e9"], ["pointer", "#49a6e9"]);
  }
};

const supriceButtonHandler = () => {
  const randomPerson = Math.floor(Math.random() * (5 - 1) + 1);
  if (randomPerson == 1) {
    profile.ui(randomPerson, [], []);
  } else if (randomPerson == 2) {
    profile.ui(randomPerson, ["pointer", "#49a6e9"], ["pointer", "#49a6e9"]);
  } else if (randomPerson == 3) {
    profile.ui(randomPerson, ["pointer", "#49a6e9"], ["pointer", "#49a6e9"]);
  } else {
    profile.ui(randomPerson, ["default", "#102a42"], [("pointer", "#49a6e9")]);
  }
};
//End of Handler Function

// EvnetListeners
document.addEventListener("DOMContentLoaded", loadedHandler);
button_forward_pagetion.addEventListener("click", forwardHandler);
button_backward_pagetion.addEventListener("click", backwardHandler);
button_section.addEventListener("click", supriceButtonHandler);

//End of EvnetListeners
