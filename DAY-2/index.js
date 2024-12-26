// // Object in JS

// const Obj = {
//     name: 'ABC',
//     age: 20,
//     address: 'Lalitpur',
//     'college': 'National College of Engineering'
// }

// console.log(Obj.age)
// console.log(Obj.name)
// console.log(Obj ['college'])

// Form Handling in JS

const nameip = document.getElementById("nameip")
const submitBtn = document.getElementById("submitBtn")
const displayName = document.getElementById("todoList")

submitBtn.onclick = function () {
    submitform()
}

nameip.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        submitform()
    }
});

function submitform() {
    const inputValue = nameip.value
    if(!inputValue.trim()){
        alert("Please enter a valid name")
    }
    else {
        const list = document.createElement("li")
        list.textContent = inputValue
        todoList.appendChild(list)
        nameip.value = ""
    }
}

