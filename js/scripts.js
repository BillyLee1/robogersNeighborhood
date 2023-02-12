function roboHandler(event) {
  event.preventDefault();
  hideAns;

  const num = document.querySelector("input[type='number']").value;
  
  roboOutput(num);
}

function roboOutput(num) {
  let numArray = [];
  let tempNum = "";
  for(let i = 0; i <= num; i++) {
    tempNum = i.toString();
    numArray.push(roboEditor(tempNum));
  }
  let finalOutput = document.querySelector("#ans");
  finalOutput = numArray.innerText;
  document.querySelector(".hidden").removeAttribute("class");
}

function roboEditor(i) {
  if (i.includes("3")) {
    return "Won't you be my neighbor?";
  } else if (i.includes("2")) {
    return "Boop!";
  } else if (i.includes("1")) {
    return "Beep!";
  } else {
    return parseInt(i);
  }
}

function hideAns() {
  document.querySelector("#answer").setAttribute("class", "hidden");
}


document.addEventListener("DOMContentLoaded", function() {
  const submit = document.getElementById("btn");
  submit.addEventListener("click", roboHandler);
});
