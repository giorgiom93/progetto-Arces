let url = "https://server-node-igna.vercel.app/students"

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
      console.error(error.message);
    }
  }
  
const students =  getData(); // Call the function

students.forEach((x) => {
    temp += "<tr>";
    temp += "<td>" + x.id + "</td>";
    temp += "<td>" + x.firstname + "</td>";
    temp += "<td>" + x.lastname + "</td>";
    temp += "<td>" + x.birthday + "</td>";
    temp += "<td>" + x.address + "</td>";
    temp += "<td>" + x.email + "</td>";
    temp += "<td>" + x.telefono + "</td>";
    
    temp += "</tr>"
});

document.getElementById("data").innerHTML += temp;