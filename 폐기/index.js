//!navBar버튼클릭시좌표이동기능구현부
const logo = document.querySelector("#logo");
const social = document.querySelector("#social");
const nav_bar = document.querySelector("#nav_bar");
const nav_Height = nav_bar.getBoundingClientRect().height;
const about = document.querySelector("#about");
const profile = document.querySelector(".profile");
const project = document.querySelector("#project");
const favorites = document.querySelector("#favorites");
const board = document.querySelector("#board");
const profilePic =  document.querySelector("#profilePic");
const projectPic = document.querySelector(".projectPic");
const hobbypics = document.querySelector("#hobbyPics");
const boardarea = document.querySelector("#boardarea");
//!------------------------------------------------
//!------------------------------------------------


const scrollTo = (button, target) =>
  button.addEventListener("click", () => {
    window.scrollTo({ top: target.offsetTop-200, behavior: "smooth" });
  });

scrollTo(logo, 0);
scrollTo(about, profilePic);
scrollTo(project, projectPic);
scrollTo(favorites, hobbypics);
scrollTo(board, boardarea);



 