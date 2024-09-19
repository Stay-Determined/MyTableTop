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

  const [checkDataLocalStorage, setCheckDataLocalStorage] = useState(false);
  
  const [saveMessage, setSaveMessage] = useState("");
  const savedWorkspace = localStorage.getItem("savedWorkspace");

  useEffect(() => {    
    const workspaceBlock = Blockly.inject(blocklyDiv.current, {
      toolbox: `
        <xml>
          <block type="react_button"></block> <!-- Your custom block -->
          <block type="react_text"></block> <!-- Your custom block -->
          <block type="react_cardlist"></block> <!-- Your custom block -->
          <block type="react_deck"></block> <!-- Your custom block -->
        </xml>
      `,
      trashcan: true,
    });
    workspaceRef.current = workspaceBlock;
    
    if (savedWorkspace) {
      setCheckDataLocalStorage(true); // Des données sont présentes
    } else {
      setCheckDataLocalStorage(false); // Aucune donnée dans le localStorage
    }

    function refreshWorkspace(typeModif) {
      if (
        typeModif.type === Blockly.Events.BLOCK_CREATE ||
        typeModif.type === Blockly.Events.BLOCK_DELETE ||
        typeModif.type === Blockly.Events.BLOCK_CHANGE
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

  /*function setCookie(cname, cvalue, exdays){
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};*/


  /*const SaveWorkspace = () => {
    if (workspaceRef.current) {
      const blocklyJsonWorkspace = Blockly.serialization.workspaces.save(
        workspaceRef.current
      );
      const blocklyStringWorkspace = JSON.stringify(blocklyJsonWorkspace);

      try {
        setCookie("savedWorkspace", blocklyStringWorkspace, 100);
        setSavedWorkspace(blocklyJsonWorkspace);
        setSaveMessage("La sauvegarde a bien été prise en compte ! Have fun =)");
      } catch (error) {
        setSaveMessage("Erreur : La sauvegarde n'a pas été prise en compte, veuillez réessayer :'(");
        console.log("Erreur : "+error);
      }

      setTimeout(() => {
        setSaveMessage("");
      }, 3000);
    }
  };

  const LoadWorkspace = () => {
    if (workspaceRef.current) {
      const blocklyStringWorkspace = getCookie("savedWorkspace");
      const blocklyJsonWorkspace = JSON.parse(blocklyStringWorkspace);
      try {
        Blockly.serialization.workspaces.load(
          blocklyJsonWorkspace,
          workspaceRef.current
        );
      } catch (error) {
        console.log("Erreur : "+error)
      }
    }
  };*/



  const SaveWorkspace = () => {
    if (workspaceRef.current) {
      const workspaceJson = Blockly.serialization.workspaces.save(workspaceRef.current);
      const workspaceString = JSON.stringify(workspaceJson);

      try {
        localStorage.setItem('savedWorkspace', workspaceString);
        setSaveMessage("La sauvegarde a bien été prise en compte ! Have fun =)");

      } catch (error) {
        console.log("Erreur lors de la sauvegarde : ", error);
        setSaveMessage("Erreur lors de la sauvegarde ='(");
      }
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
            className={`${style.btn} ${checkDataLocalStorage ? style.btn__tertiary : style.btn__disabled}`}
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
