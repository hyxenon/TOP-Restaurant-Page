import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";


export const container = document.getElementById("container")


const createHeader = ()=>{
    // ----------- Header -----------
    const header = document.createElement("header");
    container.appendChild(header);
  
    const nav = document.createElement("nav");
    header.appendChild(nav);
  
    const logoDiv = document.createElement("div");
    logoDiv.classList.add("logo");
    nav.appendChild(logoDiv);
  
    const logoH1 = document.createElement("h1");
    logoH1.textContent = "D'Edwards";
    logoDiv.appendChild(logoH1);
  
    const navLinks = document.createElement("div");
    navLinks.classList.add("nav-links");
    nav.appendChild(navLinks);

  
    const navUl = document.createElement("ul");
    navLinks.appendChild(navUl);
  
    const liHome = document.createElement("li");
    liHome.textContent = "Home";
    navUl.appendChild(liHome);
  
    const liMenu = document.createElement("li");
    liMenu.textContent = "Menu";
   
    navUl.appendChild(liMenu);
    
    
    const liContact = document.createElement("li");
    liContact.textContent = "Contact";
    navUl.appendChild(liContact);

    // AddEventListener

    liHome.addEventListener("click",()=>{
        container.innerHTML = ""
        createTemplate()
        home()
        
    })
    liMenu.addEventListener("click",()=>{
        container.innerHTML = ""
        createTemplate()
        menu()
       
    })
    liContact.addEventListener("click",()=>{
      container.innerHTML = ""
      createTemplate()
      contact()
      
    })
  }


  const createFooter = ()=>{
    // ----------- Footer -----------
    const footer = document.createElement("footer");
    container.appendChild(footer);
  
    const footerP = document.createElement("p");
    footerP.innerHTML = "Copyright &copy; Justine Edward P. Santos";
    footer.appendChild(footerP);
  
  }


 export const createTemplate = ()=>{
        createHeader()
        createFooter()
  }