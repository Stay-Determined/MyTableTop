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
      name: "Autre",
      contents: [
        {
          kind: "block",
          type: "react_button",
        },
        {
          kind: "block",
          type: "react_text",
        },
        {
          kind: "block",
          type: "react_div",
        },
      ],
    },
  ],
};
