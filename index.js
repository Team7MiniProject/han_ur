//!navBar버튼클릭시좌표이동기능구현부
const logo = document.querySelector("#logo");
const project = document.querySelector("#project");
const projectPic = document.querySelector(".projectPic");
const board = document.querySelector("#board");
const social = document.querySelector("#social");
const nav_bar = document.querySelector("#nav_bar");
const nav_Height = nav_bar.getBoundingClientRect().height;
const sidebar = document.querySelector("#sidebar");
const sidebar_height = sidebar.getBoundingClientRect().height;
const profile = document.querySelector(".profile");
const hobby = document.querySelector("#hobby");
const basketball = document.querySelector(".basketball");
 

//!------------------------------------------------

project.addEventListener('click', (event) => {

  const target = event.target;
  const link = target.dataset.link;  
  console.log(event.target.dataset.link);
  sidebar.style.display = "none";
    const scroll = document.querySelector(link);
    window.scrollTo({top:projectPic.offsetTop-200,behavior:"smooth"}); //option으로 애니메이션을 smooth하게 만든다
   
});

//!------------------------------------------------ 
logo.addEventListener("click", () => {
  sidebar.style.display = "flex";
  window.scrollTo({top:0,behavior:"smooth"});
  //   const axis = logo.getBoundingClientRect();
  // scrollTo(0, axis.y - nav_Height);
});
// project.addEventListener("click", () => {
//    
//   const axis = project.getBoundingClientRect();
//   scrollTo(0, axis.y - nav_Height);
// });
board.addEventListener("click", () => {
    sidebar.style.display = "none";
  const axis = board.getBoundingClientRect();
  scrollTo(0, axis.y - nav_Height);
});
 
profile.addEventListener('click',()=>{
  // const axis = social.getBoundingClientRect();
  // scrollTo(axis.x, 0 - sidebar_height);
  window.scrollTo({top:0,behavior:"smooth"});
})
basketball.addEventListener('click',()=>{
  // const axis = social.getBoundingClientRect();
  // scrollTo(axis.x,0 - sidebar_height);
  
  window.scrollTo({top:basketball.offsetTop+300,behavior:"smooth"});
})
 


