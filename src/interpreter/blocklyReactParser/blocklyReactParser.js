import React from "react";

import Button from "../../components/createdComponents/Button";
import Card from "../../components/createdComponents/Card";
import Deck from "../../components/createdComponents/Deck";
import Text from "../../components/createdComponents/Text";
import Workspace from "../../components/Workspace";

import Initializer from "./initializer";

export function blocklyReactParser(workspaceJson, actualWorkspace) {
  var content = [];
  if (workspaceJson && workspaceJson.blocks && workspaceJson.blocks.blocks) {
    workspaceJson.blocks.blocks.forEach((block, index) => {
      let parent = <Initializer  key={index+`bloc`}/>
      // console.log("parent.key",parent.key);
      
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
      const final = [...blockParse(block, parent)];
      // console.log("final",final);
      let lastKey = "";
      for (let finalTemp = final;finalTemp[0]; ) {
        lastKey = lastKey + finalTemp[0].key;
        if (finalTemp[1]){
          finalTemp = finalTemp[1]
        }else {
          break
        }
      }
      // console.log("last key",lastKey);
      content = [
        ...content,
        React.cloneElement(parent, {key:parent.key+lastKey}, ...blockParse(block, parent)),
      ];
    });
  }
  // console.log("content end", content);
  return content;
  const newChildren = React.cloneElement(
    actualWorkspace.props.children,
    ...content
  );
  return React.cloneElement(actualWorkspace, newChildren.props);
}

function blockParse(block, parent) {
  // console.log("DEBUT DE PARSE DU BLOC", block.type);
  if (!block || !parent){
    return [];
  }

  let content = [];
  if (block.type === "react_button") {
    // console.log("button");
    // console.log(block.fields["BUTTON_TEXT"]);
    // ret = React.cloneElement(parent.props,null,<Button text={block.fields["BUTTON_TEXT"]} onClick={null} />)
    content = [<Button text={block.fields["BUTTON_TEXT"]} onClick={null} key={block.fields["BUTTON_TEXT"]}/>];
  }
  if (block.type === "react_text") {
    // console.log("text");
    // ret = React.cloneElement(parent.props,null,<Text text={block.fields["TEXT_TEXT"]} />)
    content = [<Text text={block.fields["TEXT_TEXT"]} key={block.fields["TEXT_TEXT"]}/>];
  }
  if (block.type === "react_cardlist") {
    content = [
      <Card
        textNombre={block.fields["CARD_TEXT"]}
        textFamille={block.fields["FAMILLY_TEXT"]}
        key={block.fields["CARD_TEXT"]+block.fields["FAMILLY_TEXT"]}
      />,
    ];
  }
  if (block.type === "react_deck") {
    content = [
      <Deck text={block.fields["DECK_TEXT"]} key={block.fields["DECK_TEXT"]}/>,
    ];
    content = [<Deck text={block.fields["DECK_TEXT"]} />];
  }
  if (block.type === "react_div"){
    console.log("div");

    

    // if (block.inputs["STYLE"]){
    //   console.log(block.inputs["STYLE"]);
    //   if (block.inputs["STYLE"].block.type === "react_styles"){
    //       console.log(block.inputs["STYLE"].block);
    //       if (block.inputs["STYLE"].block.inputs["STYLE"] && block.inputs["STYLE"].block.inputs["STYLE"].block.fields["STYLE_KEY"]){
    //         if (block.inputs["STYLE"].block.inputs["STYLE"].block.type === "react_style") {
    //           if (block.inputs["STYLE"].block.inputs["STYLE"].block.inputs["STYLE_VALUE"]) {
    //             if (block.inputs["STYLE"].block.inputs["STYLE"].block.inputs["STYLE_VALUE"].block.fields["TEXT"]) {
    //               let key = block.inputs["STYLE"].block.inputs["STYLE"].block.fields["STYLE_KEY"];
    //               let value = block.inputs["STYLE"].block.inputs["STYLE"].block.inputs["STYLE_VALUE"].block.fields["TEXT"]
    //               console.log(key,value);
    //               divParent = Initializer({key:value});
    //             }
    //           }
    //         }
    //       }
    //   }
    // }
    if (block.inputs && block.inputs["DO"]){
      let temp = block.inputs["DO"].block;
      let index = 0
      for (; temp &&temp.next;temp = temp.next.block ) {

        index++
      }
      let divParent = <Initializer  key={`bloc`+index}/>
      // console.log("divParent",divParent)
      const newChildren = [...blockParse(block.inputs["DO"].block,divParent)];
      let lastKey = "";
      for (let finalTemp = newChildren;finalTemp[0]; ) {
        lastKey = lastKey + finalTemp[0].key;
        if (finalTemp[1]){
          finalTemp = finalTemp[1]
        }else {
          break
        }
      }
      content = [ React.cloneElement(divParent, {key:divParent.key+lastKey},newChildren)];
    }
  }
  if (block.type === "return_card") {
    content = [];
  }
  if (block.type === "rotate_card") {
    content = [];
  }
  // if (block.type === "math_number") {
  //   const numberValue = block.fields?.["NUMBER"];
  //   content = [numberValue];
  // }
  if (block.next) {
    content = [...content, blockParse(block.next.block, parent)];
  }
  return content;
}
