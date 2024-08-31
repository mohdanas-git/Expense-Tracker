function enter() {
  // Get input values
  const description = document.getElementById("expdes").value;
  const category = document.querySelector("select").value;
  const amount = document.querySelector("input[type='number']").value;

  // Validate input
  if (!description || !category || !amount) {
    alert("Please fill in all fields.");
    return;
  }

  // Create a new table row
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${description}</td>
    <td>${category}</td>
    <td>${amount}</td>
  `;

  // Append the new row to the table body
  document.getElementById("explist").appendChild(newRow);

  // Clear the input fields
  document.getElementById("expdes").value = "";
  document.querySelector("select").value = "";
  document.querySelector("input[type='number']").value = "";
}
