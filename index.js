let btns = document.querySelectorAll(".btns div")
const screen =document.querySelector(".screen")



let numInScreen =""

btns = Array.from(btns)
btns.map(btn => {
  btn.onclick = () => {
    const num = btn.getAttribute("value");

    if(!Number(num)){
      
    switch (num) {
      case "limpar tudo":
        numInScreen = ""
        screen.value =""
        break;

      case "limpar":
        numInScreen = screen.value.slice(0,numInScreen.length-1)
        screen.value = numInScreen
        break;

      case ".":
        const plus = screen.value.indexOf("+")
        const menos = screen.value.indexOf("-")
        const div = screen.value.indexOf("/")
        const point = screen.value.indexOf(".")

        
        if (point >= 0 || (point < plus || point < div || point < menos)) {
          return
        }

        screen.value += "."
        break;
      case "sinal":
        screen.value = Number(screen.value) * (-1)
        break
      case "result":
        screen.value = eval(screen.value)
        break
    
      default:
        screen.value += num
        break;
    }
  }
    if (Number(num) > 0) {
      screen.value += num
      return
    }

  
  }
})


