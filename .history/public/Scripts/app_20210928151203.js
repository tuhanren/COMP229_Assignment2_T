"use strict";
(function () {
  function Start() {
    console.log("Start...");
  }
  window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map
const lottiehome = document.querySelector(".lottiehome");
lottie.loadAnimation({
  container: lottiehome,
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "https://assets3.lottiefiles.com/private_files/lf30_rysgr4xj.json",
});
