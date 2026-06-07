function addTenant() {

  const name = document.getElementById("name").value;
  const property = document.getElementById("property").value;
  const rent = document.getElementById("rent").value;
  const dueDate = document.getElementById("dueDate").value;

  const li = document.createElement("li");

  li.innerText =
    name + " | " + property + " | KSh " + rent + " | Due: " + dueDate;

  document.getElementById("list").appendChild(li);

  document.getElementById("name").value = "";
  document.getElementById("property").value = "";
  document.getElementById("rent").value = "";
  document.getElementById("dueDate").value = "";
}