async function loadThreats() {
  const response = await fetch("threats/log.json");
  const data = await response.json();
  const container = document.getElementById("threat-log");

  data.forEach((threat) => {
    const item = document.createElement("div");
    item.className = "threat";
    item.innerHTML = `
      <h3>🚨 ${threat.title}</h3>
      <p>🔍 Type: ${threat.type}</p>
      <p>🕒 Detected: ${threat.timestamp}</p>
      <p>🌍 Source IP: ${threat.source}</p>
    `;
    container.appendChild(item);
  });
}

loadThreats();
