import React, { useEffect, useRef, useState } from "react";
import * as Blockly from "blockly";
import "blockly/blocks";

import Footer from "./../../components/Footer";
import Header from "./../../components/Header";
import Workspace from "./../../components/Workspace";

import { blocklyReactParser } from "../../interpreter/blocklyReactParser/blocklyReactParser";
import { reactBlocksGenerator } from "../../interpreter/blocks/reactBlocks";
import style from "./index.module.css";
const Index = () => {
  const blocklyDiv = useRef(null);
  const workspaceRef = useRef(null);
  const [workspaceContent, setWorkspaceContent] = useState(Workspace);

  const [savedWorkspace, setSavedWorkspace] = useState(null);
  useEffect(() => {
    const workspaceBlock = Blockly.inject(blocklyDiv.current, {
      toolbox: `
        <xml>
          <block type="react_button"></block> <!-- Your custom block -->
          <block type="react_text"></block> <!-- Your custom block -->
          <block type="react_cardlist"></block> <!-- Your custom block -->
        </xml>
      `,
    });
    workspaceRef.current = workspaceBlock;
    // setWorkspaceContent(<Button/>)
    // Initialize custom block generators

    function refreshWorkspace(typeModif) {
      if (
        typeModif?.type === Blockly.Events.BLOCK_MOVE ||
        typeModif?.type === Blockly.Events.BLOCK_DELETE ||
        typeModif?.type === Blockly.Events.BLOCK_CHANGE
      ) {
        generateCode();
      }
    }
    workspaceRef.current.addChangeListener(refreshWorkspace);

    return () => {
      if (workspaceRef.current) {
        workspaceRef.current.removeChangeListener(refreshWorkspace);
        workspaceRef.current.dispose();
      }
    };
  }, []);

  const generateCode = () => {
    // const blocksContent = blocklyReactParser(Blockly.serialization.workspaces.save(workspaceRef.current));
    // console.log(workspaceContent);
    // console.log(blocksContent);

    // la sorcellerie est ici :
    // vas faloir que j'y touche c'est pas encore ultra opti mais le coeur y est
    // const newChildren = React.cloneElement(workspaceContent.props.children,...blocksContent)
    // console.log(newChildren);
    setWorkspaceContent(
      blocklyReactParser(
        Blockly.serialization.workspaces.save(workspaceRef.current),
        workspaceContent
      )
    );

    console.log(workspaceContent);
  };

  const SaveWorkspace = () => {
    if (workspaceRef.current) {
      const workspaceJSON = Blockly.serialization.workspaces.save(
        workspaceRef.current
      );
      setSavedWorkspace(workspaceJSON);
      console.log("Espace de travail exporté :", workspaceJSON);
    }
  };

  const LoadWorkspace = () => {
    if (workspaceRef.current && savedWorkspace) {
      Blockly.serialization.workspaces.load(
        savedWorkspace,
        workspaceRef.current
      );
      console.log("Espace de travail importé");
    } else {
      console.log("Aucune sauvegarde à importé n'a été trouvé");
    }
  };

  return (
    <div className={style.create__page}>
      <Header />
      <div ref={blocklyDiv} style={{ height: "480px", width: "100%" }}></div>
      <button
        onClick={generateCode}
        className={`${style.btn} ${style.btn__primary}`}
      >
        Generate Code
      </button>
      <div>{workspaceContent}</div>
      <div className={style.container}>
        <button
          className={`${style.btn} ${style.btn__primary}`}
          onClick={SaveWorkspace}
        >
          Save
        </button>
        <button
          className={`${style.btn} ${style.btn__secondary}`}
          onClick={LoadWorkspace}
        >
          Load
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
