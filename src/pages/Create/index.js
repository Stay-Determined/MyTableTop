import React, { useEffect, useRef, useState } from "react";
import * as Blockly from "blockly";
import "blockly/blocks";

import Footer from "./../../components/Footer";
import Header from "./../../components/Header";
import Workspace from "./../../components/Workspace";

import { blocklyReactParser } from "../../interpreter/blocklyReactParser/blocklyReactParser";
import { reactBlocksGenerator } from "../../interpreter/blocks/reactBlocks";
import { toolbox } from "../../interpreter/blocks/toolbox";

import style from "./index.module.css";

const Index = () => {
  const blocklyDiv = useRef(null);
  const workspaceRef = useRef(null);
  const [workspaceContent, setWorkspaceContent] = useState(Workspace);

  const [savedWorkspace, setSavedWorkspace] = useState(null);
  const [saveMessage, setSaveMessage] = useState("");

  useEffect(() => {
    const workspaceBlock = Blockly.inject(blocklyDiv.current, {
      toolbox: toolbox,
      trashcan: true,
    });
    workspaceRef.current = workspaceBlock;

    function refreshWorkspace(typeModif) {
      if (
        typeModif.type === Blockly.Events.BLOCK_CREATE ||
        typeModif.type === Blockly.Events.BLOCK_DELETE ||
        typeModif.type === Blockly.Events.BLOCK_CHANGE ||
        typeModif.type === Blockly.Events.BLOCK_MOVE
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
    setWorkspaceContent(
      blocklyReactParser(
        Blockly.serialization.workspaces.save(workspaceRef.current),
        workspaceContent
      )
    );
  };

  const SaveWorkspace = () => {
    if (workspaceRef.current) {
      const workspaceJSON = Blockly.serialization.workspaces.save(
        workspaceRef.current
      );
      setSavedWorkspace(workspaceJSON);

      setSaveMessage("La sauvegarde a bien été prise en compte ! Have fun =)");

      setTimeout(() => {
        setSaveMessage("");
      }, 3000);
    }
  };

  const LoadWorkspace = () => {
    if (workspaceRef.current && savedWorkspace) {
      Blockly.serialization.workspaces.load(
        savedWorkspace,
        workspaceRef.current
      );
    }
  };

  return (
    <div className={style.create__page}>
      <Header />
      <div className={style.page__content}>
        <div className={style.create__content}>
          <div ref={blocklyDiv} className={style.blockly__bloc}></div>
          <div className={style.create__design}>{workspaceContent}</div>
        </div>

        <div className={style.btn__container}>
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

          {saveMessage && (
            <div className={style.btn__message}>{saveMessage}</div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
