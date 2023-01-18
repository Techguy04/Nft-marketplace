/** @format */

const cardBx = document.querySelector("card");
const cardBtn = document.querySelector(".btn");
const cardPrice = document.querySelector(".price");
const cardItems = document.querySelector(".carditems");


cardBx.addEventListener("click", ()=> {
  cardBtn.classList.add("cbtn")
})
// for (let i = 0; i < cardItems.length; i++) {
//   if (cardItems[i].contains(cardBx)) {
//     cardBx.addEventListener("mouseover", () => {
//       cardBtn.style.display = "flex";
//     })
//   }
// }

