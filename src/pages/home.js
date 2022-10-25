import heroPic from "../assets/imgs/hero.jpg";
import { container,createTemplate } from "./website";
import { menu } from "./menu";


export const home = () => {
  

  // ----------- Main Content -----------
  const main = document.createElement("main");
  container.appendChild(main);

  const section = document.createElement("section");
  section.classList.add("content");
  main.appendChild(section);

  const heroDiv = document.createElement("div");
  heroDiv.classList.add("hero");
  section.appendChild(heroDiv);

  const imgHero = document.createElement("img");
  imgHero.setAttribute("id", "hero");
  imgHero.setAttribute("alt", "ihaw ihaw");
  imgHero.src = heroPic;
  heroDiv.appendChild(imgHero);

  const contentContainer = document.createElement("div");
  contentContainer.classList.add("content-container");
  section.appendChild(contentContainer);

  const welcome = document.createElement("div");
  welcome.classList.add("welcome");
  contentContainer.appendChild(welcome);

  const welcomeH2 = document.createElement("h2");
  welcomeH2.textContent = "Welcome to";
  welcome.appendChild(welcomeH2);

  const nowrap = document.createElement("span");
  nowrap.classList.add("no-wrap");
  nowrap.textContent = "D'Edwards Inihaws";
  welcomeH2.appendChild(nowrap);

  const contentDescription = document.createElement("div");
  contentDescription.classList.add("content-description");
  contentContainer.appendChild(contentDescription);

  const descriptionH2 = document.createElement("h2");
  descriptionH2.textContent = "The best inihaw restaurant in the Town!";
  contentDescription.appendChild(descriptionH2);

  const descriptionP = document.createElement("p");
  descriptionP.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at veritatis eligendi. Obcaecati, ipsa minima recusandae aliquam odio odit voluptatem, nostrum, hic aspernatur natus officia nemo. Aperiam expedita est atque, nostrum ad perspiciatis quibusdam minus a voluptates, magnam corrupti ipsam optio culpa eos, quas tempora adipisci? Assumenda quam, voluptates laudantium itaque ipsam, nemo quo beatae possimus est quisquam eveniet odio. Obcaecati, laboriosam soluta molestiae fugit iusto at ipsum aliquam asperiores in accusantium! Enim dolore eum incidunt tempore? Magni adipisci nam alias quia illo accusantium ipsa, ratione eligendi! Enim eligendi molestias quaerat sapiente deleniti quo accusantium repellendus recusandae consequuntur. Qui, et.";
  contentDescription.appendChild(descriptionP);

  const checkBtn = document.createElement("button");
  checkBtn.classList.add("btn", "check-btn");
  checkBtn.textContent = "Check Menu";
  section.appendChild(checkBtn);

  checkBtn.addEventListener("click",()=>{
    container.innerHTML = ""
    createTemplate()
    menu()
  })
  
};

