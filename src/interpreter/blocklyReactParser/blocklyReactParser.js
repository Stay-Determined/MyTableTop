import React from "react";

import Button from "../../components/createdComponents/Button";
import Card from "../../components/createdComponents/Card";
import Deck from "../../components/createdComponents/Deck";
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
  const newChildren = React.cloneElement(
    actualWorkspace.props.children,
    ...content
  );
  return React.cloneElement(actualWorkspace, newChildren.props);
}

function blockParse(block, parent) {
  let content = [];

  if (block.type === "react_cardlist") {
    content = [
      <Card
        textNombre={block.fields["CARD_TEXT"]}
        textFamille={block.fields["FAMILLY_TEXT"]}
      />,
    ];
  }
  if (block.type === "react_deck") {
    content = [<Deck text={block.fields["DECK_TEXT"]} />];
  }
  if (block.type === "react_button") {
    content = [<Button text={block.fields["BUTTON_TEXT"]} onClick={null} />];
  }
  if (block.type === "react_text") {
    content = [<Text text={block.fields["TEXT_TEXT"]} />];
  }
  if (block.type === "return_card") {
    content = [];
  }
  if (block.type === "rotate_card") {
    content = [];
  }
  if (block.type === "math_number") {
    const numberValue = block.fields?.["NUMBER"];
    content = [numberValue];
  }
  if (block.next) {
    content = [...content, blockParse(block.next.block, parent)];
  }
  return content;
}
