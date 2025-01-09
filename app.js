let url = "https://server-node-igna.vercel.app/students";

async function getData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error("Errore durante il recupero dei dati:", error.message);
    return [];
  }
}

async function renderStudents() {
  const students = await getData(); // Aspetta il risultato della funzione getData

  let temp = `
    <thead>
      <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Birthday</th>
        <th>Address</th>
        <th>Email</th>
        <th>Phone</th>
      </tr>
    </thead>
    <tbody>
  `;

  // Aggiunta delle righe dei dati
  students.forEach((x) => {
    temp += "<tr>";
    temp += "<td>" + x.id + "</td>";
    temp += "<td>" + x.firstname + "</td>";
    temp += "<td>" + x.lastname + "</td>";
    temp += "<td>" + x.birthday + "</td>";
    temp += "<td>" + x.address + "</td>";
    temp += "<td>" + x.email + "</td>";
    temp += "<td>" + x.telefono + "</td>";
    temp += "</tr>";
  });

  temp += "</tbody>";

  // Aggiorna il contenuto della tabella
  document.getElementById("data").innerHTML = temp;
}

// Chiamata della funzione per il rendering
renderStudents();
