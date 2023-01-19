/** @format */
const navBtn = document.querySelector("#navbtn");
const popupItems = document.querySelector("#popupitems");
const btnClose = document.querySelector("#close");

navBtn.addEventListener("click", () => {
  popupItems.classList.add("displayitems")
})

btnClose.addEventListener("click", () => {
  popupItems.classList.remove("displayitems")
});