function choose(pokemon = {}) {
  const {
    name = "",
    health: { initial = 0, current = 0, bar = "" },
    types = [],
    avatar = "",
  } = pokemon;
  const statusContainer = document.createElement("div");
  $(statusContainer).addClass("status");

  const typesArray = types.map((type) => {
    return `<li class="button ${type.name}">${type.name}</li>`;
  });

  const typesString = typesArray.join("");

  $(statusContainer).html(`
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
  `);

  const pokemonContainer = document.createElement("div");
  $(pokemonContainer).addClass("pokemon");

  $(pokemonContainer).html(`<img src="${avatar}" />`);

  return [statusContainer, pokemonContainer];
}

function controls(pokemon = {}, message = "", callback) {
  const { name = "", moves = [] } = pokemon;

  const dialogContainer = document.createElement("div");
  $(dialogContainer).addClass("dialog");
  $(dialogContainer).html(`
    <p>
      <span class="name">${name}</span>,
      <span class="message">${message}</span>
    </p>
  `);

  const movesContainer = document.createElement("div");
  $(movesContainer).addClass("moves");

  moves.forEach((move) => {
    const button = document.createElement("button");
    $(button)
      .addClass("button")
      .addClass("black")
      .text(move.name)
      .click(callback);

    $(movesContainer).append(button);
  });

  return [dialogContainer, movesContainer];
}
