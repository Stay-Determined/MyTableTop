import * as Blockly from "blockly";

Blockly.defineBlocksWithJsonArray([
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
    colour: "#9966FF",
    previousStatement: null,
    nextStatement: null,
  },
  {
    type: "react_deck",
    message0: "Deck %1",
    args0: [
      {
        type: "field_input",
        name: "DECK_TEXT",
        text: "Deck de cartes",
      },
    ],
    colour: "#9966FF",
    previousStatement: null,
    nextStatement: null,
  },
  {
    type: "react_button",
    message0: "Button %1",
    args0: [
      {
        type: "field_input",
        name: "BUTTON_TEXT",
        text: "Clique",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: "#FFBF00",
    tooltip: "button",
    helpUrl: "",
  },
  {
    type: "react_text",
    message0: "Texte %1",
    args0: [
      {
        type: "field_input",
        name: "TEXT_TEXT",
        text: "Texte",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: "#FFBF00",
    tooltip: "text",
    helpUrl: "",
  },
  {
    type: "math_number",
    message0: "Nombre %1",
    args0: [
      {
        type: "field_number",
        name: "NUMBER",
        value: 0,
      },
    ],
    output: "Number",
    colour: "#59C059",
    tooltip: "number",
    helpUrl: "",
  },
  {
    type: "react_div",
    message0: "<div>%1",
    args0: [
      {
        type: "input_value",
        name: "STYLE"
      }
    ],
    message1: "%1",
    args1: [
      {
        "type": "input_statement",
        "name": "DO",
        
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 100,
    tooltip: "Creates a React button component",
    helpUrl: ""
  },
]);
