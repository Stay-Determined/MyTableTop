export const toolbox = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "Cartes/Deck",
      contents: [
        {
          kind: "block",
          type: "react_cardlist",
        },
        {
          kind: "block",
          type: "react_deck",
        },
      ],
    },
    {
      kind: "category",
      name: "Evénements",
      contents: [
        {
          kind: "block",
          type: "react_button",
        },
        {
          kind: "block",
          type: "react_text",
        },
      ],
    },
    {
      kind: "category",
      name: "Mouvements",
      contents: [],
    },
    {
      kind: "category",
      name: "Opérateurs",
      contents: [
        {
          kind: "block",
          type: "math_number",
        },
      ],
    },
    {
      kind: "category",
      name: "Contrôle",
      contents: [],
    },
  ],
};
