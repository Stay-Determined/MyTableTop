import React from "react";

import Button from "../../components/createdComponents/Button";
import Card from "../../components/createdComponents/Card";
import Deck from "../../components/createdComponents/Deck"
import Text from "../../components/createdComponents/Text";
import Workspace from "../../components/Workspace";

import Initializer from "./initializer";

export function blocklyReactParser(workspaceJson, actualWorkspace) {
  var content = [Workspace];
  if (workspaceJson && workspaceJson.blocks && workspaceJson.blocks.blocks) {
    workspaceJson.blocks.blocks.forEach((block, index) => {
      let parent = Initializer();
      content = [
        ...content,
        React.cloneElement(parent, null, ...blockParse(block, parent)),
      ];
    });
  }
  console.log("content end", content);
  const newChildren = React.cloneElement(
    actualWorkspace.props.children,
    ...content
  );
  console.log(newChildren);
  return React.cloneElement(actualWorkspace, newChildren.props);
}

function blockParse(block, parent) {
  console.log("DEBUT DE PARSE DU BLOC", block.type);
  let isFlipped = false;
  let content = [];

  if (block.type === "return_card") {
    content = [];
  }
  if (block.type === "react_button") {
    content = [<Button text={block.fields["BUTTON_TEXT"]} onClick={null} />];
  }
  if (block.type === "react_text") {
    content = [<Text text={block.fields["TEXT_TEXT"]} />];
  }
  if (block.type === "react_cardlist") {
    if (block.inputs && block.inputs["CARD_ACTION"]) {
      const cardAction = block.inputs["CARD_ACTION"].block;

      if (cardAction && cardAction.type === "return_card") {
        isFlipped = true;
      }
    }

    content = [
      <Card
        textNombre={block.fields["CARD_TEXT"]}
        textFamille={block.fields["FAMILLY_TEXT"]}
        isFlipped={isFlipped} 
      />,
    ];
  }
  if (block.type === "react_deck") {
    content = [
      <Deck text={block.fields["DECK_TEXT"]}/>,
    ];
  }
  if (block.next) {
    content = [...content, blockParse(block.next.block, parent)];
  }
  return content;
}
