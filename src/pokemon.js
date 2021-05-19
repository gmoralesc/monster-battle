function choose(pokemon = {}) {
  const {
    name = "",
    health: { initial = 0, current = 0, bar = "" },
    types = [],
    avatar = "",
  } = pokemon;
  const statusContainer = document.createElement("div");
  statusContainer.className = "status";

  const typesArray = types.map((type) => {
    return `<li class="button ${type.name}">${type.name}</li>`;
  });

  const typesString = typesArray.join("");

  statusContainer.innerHTML = `
    <div class="info">
      <p class="name">${name}</p>
    </div>
    <ul class="types">
      ${typesString}
    </ul>
    <div class="meter">
      <span class="bar ${bar}" style="width: 100%"></span>
    </div>
    <div class="health">${current}/${initial}</div>
  `;

  const pokemonContainer = document.createElement("div");
  pokemonContainer.className = "pokemon";

  pokemonContainer.innerHTML = `<img src="${avatar}" />`;

  return [statusContainer, pokemonContainer];
}

function controls(pokemon = {}, message = "") {
  const { name = "", moves = [] } = pokemon;

  const dialogContainer = document.createElement("div");
  dialogContainer.className = "dialog";
  dialogContainer.innerHTML = `
    <p>
      <span class="name">${name}</span>,
      <span class="message">${message}</span>
    </p>
  `;

  const movesContainer = document.createElement("div");
  movesContainer.className = "moves";

  moves.forEach((move) => {
    const button = document.createElement("button");
    button.className = "button black";
    button.textContent = move.name;

    movesContainer.appendChild(button);
  });

  return [dialogContainer, movesContainer];
}
