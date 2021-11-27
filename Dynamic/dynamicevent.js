const formEl = document.querySelector("form");
const tbodyEl = document.querySelector("tbody");
const tableEl = document.querySelector("table");
function onAddWebsite(e) {
  e.preventDefault();
  const url = document.getElementById("url").value;
  const website = document.getElementById("website").value;
  tbodyEl.innerHTML +=`
      <tr>
          <td>${url}</td>
          <td>${website}</td>
          <td><button class="deleteBtn">Delete</button></td>
      </tr>`
}
function learnRegExp(){
  return /^(ftp|https?):\/\/+(www\.)?[a-z0-9\-\.]{3,}\.[a-z]{3}$/.test(learnRegExp.arguments[0]);
}
function onDeleteRow(e) {
  if (!e.target.classList.contains("deleteBtn")) {
    return;
  }

  const btn = e.target;
  btn.closest("tr").remove();
}

formEl.addEventListener("submit", onAddWebsite);
tableEl.addEventListener("click", onDeleteRow);
