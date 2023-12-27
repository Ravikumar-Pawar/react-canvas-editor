import { DocumentEditorWebComponent, DocumentEditor } from "../component";
import React from "react";
import {
  // toolbarItem,
  canvasClass,
  handleChange,
  handleSelectedText,
  toolbarClass,
  defaultText,
} from "../component/src/utils/document-editor-props";

export default {
  component: DocumentEditor,
  title: "DocumentEditor",
};

DocumentEditorWebComponent({
  // toolbar_Item: toolbarItem,
  value: defaultText,
  toolbar_Class: toolbarClass,
  canvas_Class: canvasClass,
  handle_Change: handleChange,
  handle_SelectedText: handleSelectedText,
});

export const test = () => (
  <div id='document-editor'></div>
  /* <DocumentEditor
    // toolbar={toolbarItem}
    toolbar_class={toolbarClass}
    canvas_class={canvasClass}
    on_change={handleChange}
    on_select={handleSelectedText}
    value={defaultText}
  />*/
);
