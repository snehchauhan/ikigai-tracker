function addEntry(){

const love = document.getElementById("love").value;
const skill = document.getElementById("skill").value;
const need = document.getElementById("need").value;
const pay = document.getElementById("pay").value;

if(!love || !skill || !need || !pay){
alert("Please fill all fields");
return;
}

const entry = document.createElement("div");
entry.className="card";

entry.innerHTML = `
<p><b>❤️ Love:</b> ${love}</p>
<p><b>🧠 Skill:</b> ${skill}</p>
<p><b>🌍 Need:</b> ${need}</p>
<p><b>💰 Paid:</b> ${pay}</p>
<button onclick="this.parentElement.remove()">Delete</button>
`;

document.getElementById("entries").appendChild(entry);

document.getElementById("love").value="";
document.getElementById("skill").value="";
document.getElementById("need").value="";
document.getElementById("pay").value="";
}
