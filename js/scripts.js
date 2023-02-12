function roboHandler(event) {
  event.preventDefault();
  const num = document.querySelector("input[type='number']").value;
  roboOutput(num);
}

function roboOutput(num) {
  let numArray = [];
  for(let i = 0; i <= num; i++) {
    numArray.push(i);
  }
}


document.addEventListener("DOMContentLoaded", function() {
  const submit = document.getElementById("btn");
  submit.addEventListener("click", roboHandler);
});
