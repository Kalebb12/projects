const itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")):[]
function getDate(){
    let date = new Date()
    date = date.toString().split(" ")
    document.querySelector(".date").innerHTML = date[1] + " " + date[2] + " " +date[3]
}

document.querySelector('#enter').addEventListener("click",()=>{
    const item = document.querySelector('#item')
    createItem(item)
})
const displayItem =()=>{
    let item = ""
    for(let i = 0 ;i <itemsArray.length ;i++){
        item += `
        <div class="item">
            <div class="inputController">
                    <textarea disabled>${itemsArray[i]}</textarea>
                    <div class="editController">
                        <img src="./assets/pajamas--check.svg" class="deleteBtn" alt="">
                        <img src="./assets/mage--edit.svg" class="editBtn" alt="">
                    </div>
            </div>
            <div class="updateController">
                <button class="saveBtn">Save</button>
                <button class="cancelBtn">Cancel</button>
            </div>
        </div>`
        document.querySelector(".todoList").innerHTML = item
        activateDeleteListeners()
        activateEditListeners()
        activateSaveListeners()
        activateCancelListeners()
    }
}

const activateDeleteListeners =()=>{
    const deleteBtns = document.querySelectorAll('.deleteBtn')
    deleteBtns.forEach((btn , i)=>{
        btn.addEventListener("click",()=>{
           deleteItem(i)
        })
    })
}
function deleteItem (i){
    itemsArray.splice(i,1)
    localStorage.setItem("items",JSON.stringify(itemsArray))
    location.reload()
}
function activateEditListeners(){
    const editBtns = document.querySelectorAll('.editBtn')
    updateController = document.querySelectorAll(".updateController")
    const inputs = document.querySelectorAll('.inputController textarea')
    editBtns.forEach((btn , i)=>{
        btn.addEventListener("click",()=>{
            updateController[i].style.display = "block"
            inputs[i].disabled = false
        })
    })
}
const updateItem =(texts,i)=>{
    itemsArray[i]=texts
    localStorage.setItem("items",JSON.stringify(itemsArray))
    location.reload()
}
function activateSaveListeners(){
    const saveBtns = document.querySelectorAll('.saveBtn')
    const inputs = document.querySelectorAll('textarea')
    saveBtns.forEach((btn , i)=>{
        btn.addEventListener("click",()=>{
            updateItem(inputs[i].value,i)
        })
    })
}

function activateCancelListeners(){
    const cancelBtns = document.querySelectorAll('.cancelBtn')
    updateController = document.querySelectorAll(".updateController")
    const inputs = document.querySelectorAll('.inputController textarea')
    cancelBtns.forEach((btn,i)=>{
        btn.addEventListener("click",()=>{
            updateController[i].style.display = "none"
            inputs[i].disabled = true
            location.reload()
        })
    })

}
const createItem =(item)=>{
    itemsArray.push(item.value)
    localStorage.setItem("items",JSON.stringify(itemsArray))
    location.reload()
}
window.onload = ()=>{
    getDate()
    displayItem()
}