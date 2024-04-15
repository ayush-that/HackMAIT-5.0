document
  .getElementById("signin-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "/src/home.html";
  });

// Initialization for ES Users
import { Carousel, initTWE } from "tw-elements";

initTWE({ Carousel });
