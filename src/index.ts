//
// navigation toggle logic
// Warning: Donot change any class or id in the html file
// Doing so may result in this logic not working
//

const nav = document.getElementById("nav-header");
let previousPosition = window.scrollY;
let timeoutId: any = null;
window.addEventListener("scroll", (e) => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    const currentPosition = window.scrollY;
    if (!nav) {
      return;
    }
    if (currentPosition > previousPosition) {
      nav.classList.remove("show");
      nav.classList.add("hide");
    } else {
      nav.classList.remove("hide");
      nav.classList.add("show");
    }
    previousPosition = currentPosition;
  }, 10);
});
