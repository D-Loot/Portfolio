let tempEquation = "";
let pastEquation = "";
let value = 0


document.querySelectorAll(".button").forEach(buttons => buttons.addEventListener("click", () => {

  let contents = event.target.innerText;
  console.log(contents)
  switch(contents){
    case "C":
      tempEquation = "";
      break;
    case "BKSP":
      tempEquation = pastEquation
      // TODO - reset the currnt equation to the previous equation
      break;
    case "+/-":
      tempEquation = `${tempEquation} *-1`
      break;
    case "=":
      tempEquation = eval(tempEquation)
      pastEquation = tempEquation;
      break;
    default:
      tempEquation = tempEquation + event.target.innerText;
      break;
  }
  document.querySelector(".text-input").innerText = tempEquation
  console.log(tempEquation);
}
))