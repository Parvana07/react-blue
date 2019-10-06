import React from 'react';

const EachChild = ({ name, childId, isContainer, renameChild, changeType, deleteChild }) => (
    <div className="eachChild">
        <input className="childName" type='text' value={name} onChange={()=>renameChild(event, childId)}></input>
        <input className="containerCheckbox" type="checkbox" checked={isContainer} onChange={() => changeType(!isContainer)}/>
        <span className="containerLabel">Container</span>
        <button className="deleteChild" onClick={()=> deleteChild(childId)}>X</button>
    </div>
)

export default EachChild;