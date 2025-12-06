class Player {
  name;
  health;
  hunger;
  inventory;
  level;
  toolLevels;
}

class Base {
  stash;
  machineLevels;
  level;
}

const player = new Player();
const base = new Base();

function refreshPlayer() {
  const healthValueNode = document.getElementById('healthValue');
  const hungerValueNode = document.getElementById('hungerValue');

  if (healthValueNode) {
    healthValueNode.textContent = player.health;
  }

  if (hungerValueNode) {
    hungerValueNode.textContent = player.hunger;
  }
}
