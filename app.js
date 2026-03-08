function loadEntries(){
const saved = JSON.parse(localStorage.getItem("ikigaiEntries")) || [];
saved.forEach(showEntry);
}

function addEntry(){

const love = document.getElementById("love").value;
const skill = document.getElementById("skill").value;
const need = document.getElementById("need").value;
const pay = document.getElementById("pay").value;

if(!love || !skill || !need || !pay){
alert("Please fill all fields");
return;
}

const entryData = {love, skill, need, pay};

let entries = JSON.parse(localStorage.getItem("ikigaiEntries")) || [];
entries.push(entryData);

localStorage.setItem("ikigaiEntries", JSON.stringify(entries));

showEntry(entryData);

document.getElementById("love").value="";
document.getElementById("skill").value="";
document.getElementById("need").value="";
document.getElementById("pay").value="";
}

function showEntry(data){

const entry = document.createElement("div");
entry.className="card";

entry.innerHTML = `
<p><b>❤️ Love:</b> ${data.love}</p>
<p><b>🧠 Skill:</b> ${data.skill}</p>
<p><b>🌍 Need:</b> ${data.need}</p>
<p><b>💰 Paid:</b> ${data.pay}</p>
<button onclick="deleteEntry(this)">Delete</button>
`;

document.getElementById("entries").appendChild(entry);
}

function deleteEntry(button){

const card = button.parentElement;
const text = card.innerText;

let entries = JSON.parse(localStorage.getItem("ikigaiEntries")) || [];

entries = entries.filter(e =>
!text.includes(e.love)
);

localStorage.setItem("ikigaiEntries", JSON.stringify(entries));

card.remove();
}

window.onload = loadEntries;
