let slideUpEl = document.querySelector("#slide-up-panel");
let bottomCircleEl = document.querySelector("#bottom-circle");
let slideUpBtnEl = document.querySelector("#slide-up-btn");

let isUp = false;

slideUpBtnEl.addEventListener("click", () => {
  isUp = setPanelUp(isUp, slideUpEl, bottomCircleEl);
});

const setPanelUp = (isUp, slideUpEl, bottomCircleEl) => {
  isUp = !isUp;
  if (isUp) {
    slideUpEl.classList.remove("slide-down-anim");
    slideUpEl.classList.add("slide-up-anim");
  } else {
    slideUpEl.classList.add("slide-down-anim");
  }
  return isUp;
};
