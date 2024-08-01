
const btns = Array.from(document.querySelectorAll(".btns div"))

const screen = document.querySelector(".screen")

function verifyInputLength() {
  if (screen.value.length > 14) {
    screen.style.fontSize=  "20px"
  }
  if (screen.value.length > 28) {
    screen.style.fontSize=  "13px"
  }
  if (screen.value.length > 48) {
    screen.style.fontSize=  "10px"
  }
}

function isthisItemTheLastOne(valueInScreen, item) {
  return valueInScreen[valueInScreen.length-1] === item
}

let letPutPoint = true

function hasPoint(params) {
  if (screen.value.indexOf(".") >= 0) {
    letPutPoint= false
  }
}
btns.forEach(btn => {
  const btnValue = btn.getAttribute("value")

  
  btn.onclick = () => {

    verifyInputLength()

    if(screen.value.length > 60) return

    if (!isNaN(btnValue)) {
      screen.value += btnValue
      return
    }

    const valueInScreen = screen.value
    switch (btnValue) {
      case "limpar tudo":
        screen.value = ""
        break;
      case "sinal":
        !isNaN(valueInScreen) && (screen.value *= (-1))

        hasPoint()
        
        break;
      case "limpar":
        screen.value = valueInScreen.slice(0,valueInScreen.length-1);
        hasPoint()
        break;
      case "/":
        if (!isthisItemTheLastOne(valueInScreen, "/")) {
          (screen.value+="/");

          letPutPoint = true
        }
        break;

      case "*":
        if (!isthisItemTheLastOne(valueInScreen, "*")) {
          (screen.value+="*");

          letPutPoint = true
        }
        break;
      case "-":
        if (!isthisItemTheLastOne(valueInScreen, "-")) {
          (screen.value+="-");

          letPutPoint = true
        }
        break;
      case "+":
        if (!isthisItemTheLastOne(valueInScreen, "+")) {
          (screen.value+="+");
          letPutPoint = true
        }
        break;
      case ".":
        if (!isthisItemTheLastOne(valueInScreen, ".") && letPutPoint) {
          (screen.value+=".");
          letPutPoint = false
        }
        break;
      case "result":
         screen.value = eval(screen.value)
        break;
    
    }
  }
})

