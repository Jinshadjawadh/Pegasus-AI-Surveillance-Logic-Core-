async function fetchTargets() {
  const response = await fetch('data/targets.json');
  return await response.json();
}

function logSurveillance(target) {
  const container = document.getElementById('log-container');
  const log = document.createElement('div');
  log.className = 'log';
  log.innerHTML = `
    <h3>🎯 Target: ${target.name}</h3>
    <p>📍 Location: ${target.location}</p>
    <p>📱 Device: ${target.device}</p>
    <p>🕒 Last Active: ${target.lastActive}</p>
  `;
  container.appendChild(log);
}

async function simulatePegasus() {
  const targets = await fetchTargets();
  targets.forEach(target => {
    logSurveillance(target);
  });
}

simulatePegasus();