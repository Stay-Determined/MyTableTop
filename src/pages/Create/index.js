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

  const [cssBtn, setCssBtn] = useState(localStorage.getItem("savedWorkspace") ? style.btn__tertiary : style.btn__disabled);
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

  const checkStorage = () => {
    if (localStorage.getItem("savedWorkspace")) {
      setCssBtn(style.btn__tertiary); 
    } else {
      setCssBtn(style.btn__disabled);

    }
  }

  const SaveWorkspace = () => {
    if (workspaceRef.current && workspaceRef.current.getAllBlocks().length > 0) {
      
      const workspaceJson = Blockly.serialization.workspaces.save(workspaceRef.current);
      const workspaceString = JSON.stringify(workspaceJson);
      
      try {
        localStorage.setItem('savedWorkspace', workspaceString);
        setSaveMessage("La sauvegarde a bien été prise en compte ! Have fun =)");

      } catch (error) {
        console.log("Erreur lors de la sauvegarde : ", error);
        setSaveMessage("Erreur lors de la sauvegarde ='(");
      }
      checkStorage();
    
      setTimeout(() => {
        setSaveMessage("");
      }, 3000);
    }
  };

  const LoadWorkspace = () => {
    if (workspaceRef.current) {
      const savedWorkspace = localStorage.getItem('savedWorkspace');

      try {
        Blockly.serialization.workspaces.load(
          JSON.parse(savedWorkspace),
          workspaceRef.current
        );
        setSaveMessage("Chargement de la sauvegarde réussi =)");

      } catch (error) {
        console.log("Erreur lors du chargement : ", error);
        setSaveMessage("Le chargement de la sauvegarde à échoué ='(");
      }
      setTimeout(() => {
        setSaveMessage("");
      }, 3000);
    }
  };
  
  const eraseDataLocalStorage = () => {
    var msg = "Vous êtes sur le points de supprimer votre sauvegarde. \
      \n\nÊtes vous sûr de continuer ? \
      \n\nCette action est irréversible O_O'";
    // eslint-disable-next-line no-restricted-globals
  if (confirm(msg)) {
    //eslint-disable-line
    try {
      localStorage.clear()
      setSaveMessage("Sauvegarde supprimé avec succès");
    } catch (error) {
      console.log("Erreur : "+error);
      setSaveMessage("La suppression de la sauvegarde à échoué");
    }
   }else{
    setSaveMessage("La suppression de la sauvegarde à été annulé");
   }
   checkStorage();

   setTimeout(() => {
    setSaveMessage("");
  }, 3000);
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
            onClick={SaveWorkspace}>
            Save
          </button>

          <button
            className={`${style.btn} ${style.btn__secondary}`}
            onClick={LoadWorkspace}>
            Load
          </button>

          <button
            className={`${style.btn} ${cssBtn}`}
            onClick={eraseDataLocalStorage}>
            Erase
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
