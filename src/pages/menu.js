import { container } from "./website";
import chickenInasalImg from "../assets/imgs/chickenInasal.jpg";
import bbqImg from '../assets/imgs/bbq.jpeg';
import inihawTilapiaImg from '../assets/imgs/inihawTilapia.jpg';
import liempoImg from '../assets/imgs/liempo.jpg';

const recipeList = [
  {
    img: chickenInasalImg,
    title: "Chicken Inasal",
    price: 120,
    description: "Best Seller",
  },

  {
    img: bbqImg,
    title: "BBQ",
    price: 100,
    description: "Best Seller",
  },

  {
    img: inihawTilapiaImg,
    title: "Inihaw na Tilapia",
    price: 130,
    description: "Best Seller",
  },

  {
    img: liempoImg,
    title: "Inihaw na Liempo",
    price: 200,
    description: "Best Seller",
  },
];

export const menu = () => {
  const main = document.createElement("main");
  container.appendChild(main);

  const section = document.createElement("section");
  section.classList.add("content");
  main.appendChild(section);

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  section.appendChild(menuContainer);

  const menuH1 = document.createElement("h1");
  menuH1.textContent = "Our Menu";
  menuContainer.appendChild(menuH1);

  const recipeContainer = document.createElement("div");
  recipeContainer.classList.add("recipe-container");
  menuContainer.appendChild(recipeContainer);

  recipeList.forEach((index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    recipeContainer.appendChild(card);

    const InihawImage = document.createElement("img");
    InihawImage.src = index.img;
    card.appendChild(InihawImage);

    const recipeDescription = document.createElement("div");
    recipeDescription.classList.add("recipe");
    card.appendChild(recipeDescription);

    const recipeName = document.createElement("h3");
    recipeName.textContent = index.title;

    const recipePrice = document.createElement("p");
    recipePrice.textContent = `${index.price} pesos`;

    const recipeDesc = document.createElement("p");
    recipeDesc.textContent = index.description;

    recipeDescription.append(recipeName, recipePrice, recipeDesc);
  });
};
