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
  //project 1 animation
  const lottieservice1 = document.getElementById("lottieservice1");
  lottie.loadAnimation({
    container: lottieservice1,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "https://assets5.lottiefiles.com/packages/lf20_01jwptn4.json",
  });
  //project 2 animation
  const lottieservice2 = document.getElementById("lottieservice2");
  lottie.loadAnimation({
    container: lottieservice2,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "https://assets5.lottiefiles.com/private_files/lf30_rysgr4xj.json",
  });
  //project 3 animation
  const lottieservice3 = document.getElementById("lottieservice3");
  lottie.loadAnimation({
    container: lottieservice3,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "https://assets5.lottiefiles.com/packages/lf20_DMgKk1.json",
  });

  window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map
