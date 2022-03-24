
const button = document.getElementById("button-guess");
button.addEventListener("click", userValue);


function userValue() {
 userTyped = document.getElementById("input").value;
 alert(userTyped);
}
