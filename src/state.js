const state = {
  pokemons: [
    {
      name: "ivysaur",
      health: {
        initial: 60,
        current: 60,
        bar: "green",
      },
      avatar:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
      types: [
        {
          name: "grass",
        },
        {
          name: "poison",
        },
      ],
      moves: [
        {
          name: "swords-dance",
        },
        {
          name: "bind",
        },
        {
          name: "vine-whip",
        },
        {
          name: "headbutt",
        },
      ],
      _ui: {
        bar: null,
        health: null,
      },
    },
  ],
};
