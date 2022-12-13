function yes() {
  alert(
    "Thank you. This was just for mom to show she can use buttons and alerts"
  );
}
let yupButton = document.querySelector("#yesButton");
yupButton.addEventListener("click", yes);

function nope() {
  alert("The answer is YUP. Go back!");
}

let nahButton = document.querySelector("#noButton");
nahButton.addEventListener("click", nope);
