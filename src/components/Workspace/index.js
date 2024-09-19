import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { MdHeight } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,
  background: isDragging ? "lightgreen" : "grey",
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250,
  minHeight: 500 // Added to ensure empty lists are still droppable
});

const Workspace = ({ children }) => {

  const [global,setGlobal] = useState(Array.from(children))
  const [state, setState] = useState({
    droppable1: Array.from(children),
    droppable2: [],
    droppable3: [],
    droppable4: []
  });

  useEffect(() => {
    let toDel = Array.from([])
    let toAdd = Array.from([])
    for (let index = 0; index < global.length; index++) {
      const element = global[index];
      let finded = false
      for (let index2 = 0; index2 < Array.from(children).length; index2++) {
        const child = Array.from(children)[index2];

        if (child && element && child.key === element.key) {
          finded = true
        }
      }
      if (!finded){
        toDel = [...toDel,element]
      }
    }
    for (let index = 0; index < Array.from(children).length; index++) {
      const child = Array.from(children)[index];
      console.log("child",child)
      let finded = false
      for (let index2 = 0; index2 < global.length; index2++) {
        const element = Array.from(children)[index2];
        

        if ( child && element && child.key === element.key) {
          finded = true
        }
      }
      if (!finded){
        toAdd = [...toAdd,child]
      }
    }
    console.log("toDel,toAdd",toDel,toAdd)

    for (let index = 0; index < toDel.length; index++) {
      const element = toDel[index];
      let finded = -1 
      for (let index2 = 0; index2 < state.droppable1.length; index2++) {
        const inState = state.droppable1[index2];
        if (inState.key === element.key ){
          let finded = index2
        }
      }
      
      setState(prevState => ({ ...prevState, droppable1: state.droppable1.splice([finded],1) }));
      finded = -1 
      for (let index2 = 0; index2 < state.droppable2.length; index2++) {
        const inState = state.droppable2[index2];
        if (inState.key === element.key ){
          let finded = index2
        }
      }
      setState(prevState => ({ ...prevState, droppable2: state.droppable2.splice([finded],1) }));
      finded = -1 
      for (let index2 = 0; index2 < state.droppable3.length; index2++) {
        const inState = state.droppable3[index2];
        if (inState.key === element.key ){
          let finded = index2
        }
      }
      
      setState(prevState => ({ ...prevState, droppable3: state.droppable3.splice([finded],1) }));
      finded = -1 
      for (let index2 = 0; index2 < state.droppable4.length; index2++) {
        const inState = state.droppable4[index2];
        if (inState.key === element.key ){
          let finded = index2
        }
      }
      setState(prevState => ({ ...prevState, droppable4: state.droppable4.splice([finded],1) }));
      
    }
    const deposit = state.droppable1
    setState(prevState => ({ ...prevState, droppable1: [...deposit, ...toAdd] }));
    
    setGlobal(Array.from(children))
    console.log("inWorkspace", children);
  }, [children]);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // Dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        state[source.droppableId],
        source.index,
        destination.index
      );

      setState(prevState => ({
        ...prevState,
        [source.droppableId]: items
      }));
    } else {
      const result = move(
        state[source.droppableId],
        state[destination.droppableId],
        source,
        destination
      );

      setState(prevState => ({
        ...prevState,
        [source.droppableId]: result[source.droppableId],
        [destination.droppableId]: result[destination.droppableId]
      }));
    }
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-around",
      width: "100%",
      padding: "20px"
    }}>
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.keys(state).map((droppableId) => (
          <Droppable key={droppableId} droppableId={droppableId}>
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                {state[droppableId].map((item, index) => (
                  <Draggable
                    key={item.key || `item-${index}`}
                    draggableId={item.key || `item-${index}`}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        {item}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  );
};

export default Workspace;