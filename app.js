let entries = JSON.parse(localStorage.getItem("ikigai")) || [];

function save(){
localStorage.setItem("ikigai", JSON.stringify(entries));
}

function calculatePercent(entry){

let score = 0;

if(entry.love) score += 25;
if(entry.skill) score += 25;
if(entry.need) score += 25;
if(entry.pay) score += 25;

return score;

}

function show(){

const box = document.getElementById("entries");
box.innerHTML = "";

entries.forEach((e,i)=>{

let percent = calculatePercent(e);

let card = document.createElement("div");
card.className = "card";

card.innerHTML = `
<p><b>❤️ Love:</b> ${e.love}</p>
<p><b>🧠 Skill:</b> ${e.skill}</p>
<p><b>🌍 Need:</b> ${e.need}</p>
<p><b>💰 Paid:</b> ${e.pay}</p>

<div class="percent">Ikigai Score: ${percent}%</div>

<button class="delete" onclick="removeEntry(${i})">Delete</button>
`;

box.appendChild(card);

});

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

entries.push({love,skill,need,pay});

save();

show();

document.getElementById("love").value="";
document.getElementById("skill").value="";
document.getElementById("need").value="";
document.getElementById("pay").value="";

}

function removeEntry(i){

entries.splice(i,1);

save();

show();

}

show();
