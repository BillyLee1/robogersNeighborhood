function roboHandler(event) {
  event.preventDefault();
  const num = document.querySelector("input[type='number']").value;
}



document.addEventListener("DOMContentLoaded", function() {
  const submit = document.getElementById("btn");
  submit.addEventListener("click", roboHandler);
});
