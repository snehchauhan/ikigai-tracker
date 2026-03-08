function loadEntries() {
  const entries = JSON.parse(localStorage.getItem("ikigaiEntries")) || [];
  entries.forEach(entry => displayEntry(entry));
}

function addEntry() {
  const love = document.getElementById("love").value;
  const skill = document.getElementById("skill").value;
  const need = document.getElementById("need").value;
  const pay = document.getElementById("pay").value;

  if (!love || !skill || !need || !pay) {
    alert("Please fill all fields");
    return;
  }

  const entry = { love, skill, need, pay };

  let entries = JSON.parse(localStorage.getItem("ikigaiEntries")) || [];
  entries.push(entry);
  localStorage.setItem("ikigaiEntries", JSON.stringify(entries));

  displayEntry(entry);

  document.getElementById("love").value = "";
  document.getElementById("skill").value = "";
  document.getElementById("need").value = "";
  document.getElementById("pay").value = "";
}

function displayEntry(entry) {
  const container = document.getElementById("entries");

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <p><b>❤️ Love:</b> ${entry.love}</p>
    <p><b>🧠 Skill:</b> ${entry.skill}</p>
    <p><b>🌍 Need:</b> ${entry.need}</p>
    <p><b>💰 Paid:</b> ${entry.pay}</p>
    <button onclick="deleteEntry(this)">Delete</button>
  `;

  container.appendChild(card);
}

function deleteEntry(button) {
  const card = button.parentElement;
  card.remove();
}

window.onload = loadEntries;
