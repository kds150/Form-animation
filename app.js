let formulaire = document.querySelector(".formulaire");
let proposition = document.querySelector(".proposition");

let toSignin = document.querySelector("#to-signin");
let toSignup = document.querySelector("#to-signup");

toSignin.addEventListener("click", () => {
  formulaire.classList.add("slideRight");
  proposition.classList.add("slideLeft");
});

toSignup.addEventListener("click", () => {
  formulaire.classList.remove("slideRight");
  proposition.classList.remove("slideLeft");
});
