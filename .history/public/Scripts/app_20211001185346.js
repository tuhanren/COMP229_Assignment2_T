"use strict";
(function () {
  function Start() {
    console.log("Start...");
  }
  //homepage animation
  const lottiehome = document.querySelector(".lottiehome");
  lottie.loadAnimation({
    container: lottiehome,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "https://assets3.lottiefiles.com/packages/lf20_hcae8wxn.json",
  });
  window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map
