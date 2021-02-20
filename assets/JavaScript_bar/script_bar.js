
let slideUpEl = document.querySelector("#slide-up-panel");
let slideUpBtnEl = document.querySelector("#slide-up-btn");

let isUp = false;

slideUpBtnEl.addEventListener("click", () => {
  isUp = setPanelUp(isUp, slideUpEl);
});

const setPanelUp = (isUp, slideUpEl,) => {
  isUp = !isUp;
  if (isUp) {
    slideUpEl.classList.remove("slide-down-anim");
    slideUpEl.classList.add("slide-up-anim");
  } else {
    slideUpEl.classList.add("slide-down-anim");
  }
  return isUp;
};