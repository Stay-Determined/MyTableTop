import React from "react";
import Workspace from "../../components/Workspace";
import Button from "../../components/createdComponents/Button";
import Text from "../../components/createdComponents/Text";
import Card from "../../components/createdComponents/Card";
import Deck from "../../components/createdComponents/Deck"

import Initializer from "./initializer";

// ici y'auras tout le coeur du parser/interpreter, chaque block aura sont output précisé ici meme
// atm y'a que button et text, mais c'est ici qu'il y auras div par exemple, image, ou autre
export function blocklyReactParser(workspaceJson, actualWorkspace) {
  var content = [Workspace];
  if (workspaceJson && workspaceJson.blocks && workspaceJson.blocks.blocks) {
    workspaceJson.blocks.blocks.forEach((block, index) => {
      let parent = Initializer();

      // let children = Initializer();
      // // debug(block,index)
      // console.log("parent",parent)
      // if (block.type === "react_button"){
      //   console.log("button");
      //   // console.log(block.fields["BUTTON_TEXT"]);
      //   children = React.cloneElement(parent.props.children,null,<Button text={block.fields["BUTTON_TEXT"]} onClick={null} />)
      //   // content = [...content,  <Button text={block.fields["BUTTON_TEXT"]} onClick={null} />];
      // }
      // if (block.type === "react_text"){
      //   console.log("text");
      //   children = React.cloneElement(parent.props.children,null,<Text text={block.fields["TEXT_TEXT"]} />)
      //   // content = [...content,  <Text text={block.fields["TEXT_TEXT"]} />];
      // }
      // console.log("children",children);
      // let final = React.cloneElement(parent,children.props)
      // console.log("final",final)
      // content = [...content,React.cloneElement(parent,children.props)];

      // console.log(blockParse(block,parent))
      content = [
        ...content,
        React.cloneElement(parent, null, ...blockParse(block, parent)),
      ];
    });
  }
  console.log("content end", content);
  console.log("prout", actualWorkspace);
  const newChildren = React.cloneElement(
    actualWorkspace.props.children,
    ...content
  );
  console.log(newChildren);
  return React.cloneElement(actualWorkspace, newChildren.props);
}

function blockParse(block, parent) {
  console.log("DEBUT DE PARSE DU BLOC", block.type);
  let content = [];
  if (block.type === "react_button") {
    console.log("button");
    // console.log(block.fields["BUTTON_TEXT"]);
    // ret = React.cloneElement(parent.props,null,<Button text={block.fields["BUTTON_TEXT"]} onClick={null} />)
    content = [<Button text={block.fields["BUTTON_TEXT"]} onClick={null} />];
  }
  if (block.type === "react_text") {
    console.log("text");
    // ret = React.cloneElement(parent.props,null,<Text text={block.fields["TEXT_TEXT"]} />)
    content = [<Text text={block.fields["TEXT_TEXT"]} />];
  }
  if (block.type === "react_cardlist") {
    content = [
      <Card
        textNombre={block.fields["CARD_TEXT"]}
        textFamille={block.fields["FAMILLY_TEXT"]}
      />,
    ];
  }

  if (block.type === "react_deck") {
    content = [
      <Deck text={block.fields["DECK_TEXT"]}/>,
    ];
  }
  console.log(parent);
  if (block.next) {
    content = [...content, blockParse(block.next.block, parent)];
  }
  return content;
}
