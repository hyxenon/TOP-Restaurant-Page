import { container } from "./website";
import heroPic from "../assets/imgs/hero.jpg";

export const contact = ()=>{
    const main = document.createElement("main");
    container.appendChild(main);

    const section = document.createElement("section");
    section.classList.add("content");
    main.appendChild(section);

    const heroImg = document.createElement("img")
    heroImg.src = heroPic
    section.appendChild(heroImg)


    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");
    section.appendChild(contactContainer);

   

    const contactH1 = document.createElement("h1");
    contactH1.textContent = "Contact Us";

    const number = document.createElement("h2")
    number.textContent = "0911-1112-1111"

    const email = document.createElement("h2")
    email.textContent = "dummyemail@gmail.com"

    const address = document.createElement("h2")
    address.textContent = "Pob.NortSouth Science City of Munoz Nueva Ecija, Philippines"

    contactContainer.append(contactH1,number,email,address)


}