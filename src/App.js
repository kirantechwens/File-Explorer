import { useState } from "react";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/use-traverse-tree";
import "./styles.css";
import "./App.css";

import explorer from "./data/folderData";
import { FileContext } from "./ContextAPI/FileContext";

export default function App() {
  const [text, setText] = useState("");
  const [explorerData, setExplorerData] = useState(explorer);
  const [selectedFolderId, setSelectedFolderId] = useState(null); // State to hold selected folder id
  const [selectedisFolder, setSelectedisFolder] = useState(null); // State to hold selected folder id

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
   
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  const handleFolderSelect = (folderId) => {
    setSelectedFolderId(folderId);
  };

  const handleFileOpenFunc = (isFolder) => {
    setSelectedisFolder(isFolder);

  };
console.log('selectedisFolder', selectedisFolder,explorerData)


function getItemsWithIsFolderFalse(items) {
  let result = [];
  items.forEach((item) => {
    if (item.isFolder) {
      result = result.concat(getItemsWithIsFolderFalse(item.items));
    } else {
      result.push(item);
    }
  });
  return result;
}

const itemsWithIsFolderFalse = getItemsWithIsFolderFalse(explorer.items);
  return (
    <FileContext.Provider value={{ text, setText }}>
      <div className="total-container">
        <div className="lft-container">
          <Folder 
            handleInsertNode={handleInsertNode} 
            explorer={explorerData} 
            selectedId={selectedFolderId} 
            onSelect={handleFolderSelect}
            fileOpenFunc={handleFileOpenFunc} 
          />
        </div>
        <div className="rgt-container">
  {itemsWithIsFolderFalse.map((exp) => (
    exp.id === selectedFolderId && <p key={exp.id}>{exp.name}</p>
  ))}
</div>

      </div>
    </FileContext.Provider>
  );
}
