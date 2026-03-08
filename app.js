let data = JSON.parse(localStorage.getItem("ikigai")) || []

function addEntry(){

let love = document.getElementById("love").value
let good = document.getElementById("good").value
let world = document.getElementById("world").value
let paid = document.getElementById("paid").value

let entry = {love,good,world,paid}

data.push(entry)

localStorage.setItem("ikigai",JSON.stringify(data))

display()

}

function display(){

let list = document.getElementById("list")

list.innerHTML=""

data.forEach(e=>{

list.innerHTML+=`

<div class="card">

<p><b>Love:</b> ${e.love}</p>

<p><b>Good At:</b> ${e.good}</p>

<p><b>World Needs:</b> ${e.world}</p>

<p><b>Paid For:</b> ${e.paid}</p>

</div>

`

})

}

display()