const num = document.querySelectorAll('.num')
const screen = document.querySelector('.input')
const symb = document.querySelectorAll('.sign')
const clearBtn = document.querySelector('.clear')
const deleteBtn = document.querySelector('.del')
const percent = document.querySelector('.percentage')
const equal = document.querySelector('.equal')
const allBtn = document.querySelectorAll(".allBtn")
const list = document.getElementsByTagName("ul")
let bool = false
equal.addEventListener("click", () => {
    list[0].innerHTML += `<li><b>${screen.value} = ${eval(screen.value)}</b></li>`
    screen.value = eval(screen.value)
    bool = true
})
allBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (bool == true) {
            screen.value = ""
        }
        bool = false
    })
})
// }
percent.addEventListener("click", () => {
    screen.value = Number(screen.value) * 0.01

})
deleteBtn.addEventListener("click", () => { screen.value = screen.value.slice(0, -1) })
clearBtn.addEventListener("click", () => { screen.value = "" })
symb.forEach((oneSbl) => {
    oneSbl.addEventListener("click", () => { screen.value += oneSbl.innerHTML })
})
num.forEach((oneNum) => {
    oneNum.addEventListener('click', () => {
        screen.value += oneNum.innerHTML
    })
})