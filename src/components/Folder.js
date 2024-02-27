import { useState } from "react";

function Folder({ handleInsertNode = () => { }, explorer, selectedId, onSelect,fileOpenFunc }) {
  const [expand, setExpand] = useState(false);

  const toggleExpand = () => {
    setExpand(!expand);
    onSelect(explorer.id); 
    fileOpenFunc(explorer.isFolder )
  };
 
  return (
    <div className="sidebar" style={{ marginTop: 5 }}>
      {explorer.isFolder ? (
        <div onClick={toggleExpand} className={`folder ${selectedId === explorer.id ? 'selected' : ''}`}>
          <span>📁 {explorer.name}</span>
        </div>
      ) : (
        <span onClick={toggleExpand} className={`file ${selectedId === explorer.id ? 'selected' : ''}`}>
          📄 {explorer.name}</span>
      )}
      <div style={{ display: expand ? 'block' : 'none', paddingLeft: 25 }}>
        {explorer.items.map((exp) => (
          <Folder
            handleInsertNode={handleInsertNode}
            key={exp.id}
            explorer={exp}
            selectedId={selectedId} 
            onSelect={onSelect} 
            fileOpenFunc={fileOpenFunc}
          />
        ))}
      </div>
    </div>
  );
}

export default Folder;
