import React, { useRef } from "react";
// import Toolbar from "@mui/material/Toolbar";
// import Editor from '../../components/Editor/Editor';
import EditorHeader from "../../components/EditorHeader/EditorHeader";
import CanvasEditor from "../../components/Editor/CanvasEditor";
import EditorToolbar from "../../components/EditorToolbar/EditorToolbar";
import EditorFooter from "../../components/EditorFooter/EditorFooter";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

const DocumentEditor = (
  { toolbar,
    toolbarClass,
    canvasClass,
    onChange,
    onSelect,
    onSave,
    SetData }: any
) => {

  const defaultToolbarItem = {
    bold: true,
    italic: true,
    underline: true
  }

  const defaultToolbarClass = {
    container: {
      backgroundColor: "#edf2fa",
      border: "none",
      minHeight: "40px",
      boxShadow: "none",
    },
    primaryToolbar: {
      display: "flex",
      flexDirection: "row",
      minHeight: "40px",
      justifyContent: "left",
      alignItems: "center"
    }
  }

  toolbar = toolbar && Object.keys(toolbar).length ? toolbar?.toolbar : defaultToolbarItem;

  toolbarClass = toolbarClass && Object.keys(toolbarClass).length ? {
    container: {...defaultToolbarClass.container, ...toolbarClass?.container},
    primaryToolbar: { ...defaultToolbarClass.primaryToolbar, ...toolbarClass?.primaryToolbar },
    item: {...toolbarClass?.item}
  } : defaultToolbarClass;

  const canvasRef = useRef(null);
  return (
    <Provider store={store}>
      <>
        {/* <h1>{name}</h1> */}
        {/* <EditorHeader/> */}
        {/* <Toolbar /> */}
        <EditorToolbar ref={canvasRef} toolbar={toolbar} toolbarClass={toolbarClass} />
        <CanvasEditor ref={canvasRef} style={canvasClass}/>
        <EditorFooter />
      </>
    </Provider>
  );
}

export default DocumentEditor;