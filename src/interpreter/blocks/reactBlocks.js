import * as Blockly from 'blockly';

// Define a custom block for a React Button component
Blockly.defineBlocksWithJsonArray([
  {
    "type": "react_button",
    "message0": "<Button> %1",
    "args0": [
      {
        "type": "field_input",
        "name": "BUTTON_TEXT",
        "text": "Click me"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "Creates a React button component",
    "helpUrl": ""
  },
  {
    "type": "react_text",
    "message0": "<p> %1",
    "args0": [
      {
        "type": "field_input",
        "name": "TEXT_TEXT",
        "text": "lorem ipsum"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 200,
    "tooltip": "Creates a React button component",
    "helpUrl": ""
  },
  // {
  //   "type": "react_cardlist",
  //   "message0": "<img> %1",
  //   "args0": [
  //     {
  //       "type": "field_dropdown",
  //       "name": "CARD_TEXT",
  //       "text": "AS1",
  //       "options": [
  //       ["none", "NONE"],
  //       [{"src": pique1,"width": 50, "height": 25, "alt": "1"}, "AS DE PIQUE"],
  //       [{"src": pique2,"width": 50, "height": 25, "alt": "2"}, "DEUX DE PIQUE"],
  //       ]
  //     }
  //   ],
  //   "colour": 15,
  // },
  
  
  {
    "type": "react_cardlist",
    "message0": " %1 de %2",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "CARD_TEXT",
        "text": "Numero",
        "options": [
          ["As","AS"],
          ["Deux","DEUX"],
          ["Trois","TROIS"],
          ["Quatre","QUATRE"],
          ["Cinq","CINQ"],
          ["Six","SIX"],
          ["Sept","SEPT"],
          ["Huit","HUIT"],
          ["Neuf","NEUF"],
          ["Dix","DIX"],
          ["Valet","VALET"],
          ["Dame","DAME"],
          ["Roi","ROI"],
          ],
      },
      {
        "type": "field_dropdown",
        "name": "FAMILLY_TEXT",
        "text": "Type",
        "options": [
          ["Pique", "PIQUE"],
          ["Coeur", "COEUR"],
          ["Carreau", "CARREAU"],
          ["Trefle", "TREFLE"]
          ],
      },
    ],
    "colour": 230,
    "previousStatement": null,
    "nextStatement": null,
  },
  // {
  //   "type": "react_cardlist",
  //   "message0": "%1",
  //   "args0": [
  //     {
  //       "type": "field_input",
  //       "name": "TEST_TEXT",
  //       "text": "Carte"
  //     }
  //   ],
  //   "previousStatement": null,
  //   "nextStatement": null,
  //   "colour": 200,
  //   "tooltip": "Creates a React button component",
  //   "helpUrl": ""
  // },


]);