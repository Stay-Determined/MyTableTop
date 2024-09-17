import * as Blockly from "blockly";

Blockly.defineBlocksWithJsonArray([
  {
    type: "return_card",
    message0: "Turn a card",
    previousStatement: null,
    nextStatement: null,
    colour: "#FFAB19",
    tooltip: "Turn a card",
    helpUrl: "",
  },
  {
    type: "react_button",
    message0: "<Button> %1",
    args0: [
      {
        type: "field_input",
        name: "BUTTON_TEXT",
        text: "Clique",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: "#3765c3",
    tooltip: "Creates a React button component",
    helpUrl: "",
  },
  {
    type: "react_text",
    message0: "<p> %1",
    args0: [
      {
        type: "field_input",
        name: "TEXT_TEXT",
        text: "Texte",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: "#00B6DA",
    tooltip: "Creates a React button component",
    helpUrl: "",
  },

  {
    type: "react_cardlist",
    message0: "%1 de %2",
    args0: [
      {
        type: "field_dropdown",
        name: "CARD_TEXT",
        options: [
          ["As", "AS"],
          ["Deux", "DEUX"],
          ["Trois", "TROIS"],
          ["Quatre", "QUATRE"],
          ["Cinq", "CINQ"],
          ["Six", "SIX"],
          ["Sept", "SEPT"],
          ["Huit", "HUIT"],
          ["Neuf", "NEUF"],
          ["Dix", "DIX"],
          ["Valet", "VALET"],
          ["Dame", "DAME"],
          ["Roi", "ROI"],
        ],
      },
      {
        type: "field_dropdown",
        name: "FAMILLY_TEXT",
        options: [
          ["Pique", "PIQUE"],
          ["Coeur", "COEUR"],
          ["Carreau", "CARREAU"],
          ["Trèfle", "TREFLE"],
        ],
      },
    ],
    message1: " %1 ",
    args1: [
      {
        type: "input_statement",
        name: "CARD_ACTION",
      },
    ],
    colour: "#cdb4db",
    previousStatement: null,
    nextStatement: null,
  },
  {
    type: "react_deck",
    message0: " %1",
    args0: [
      {
        type: "field_input",
        name: "DECK_TEXT",
        text: "Deck de cartes",
      },
    ],
    colour: "cdb4db",
    previousStatement: null,
    nextStatement: null,
  },
]);
