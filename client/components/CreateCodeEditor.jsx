import React from 'react';
import OnClickShowCodeMirror from './OnClickShowCodeMirror.jsx';

const CreateCodeEditor = ({
  syntaxObject,
  index,
  deleteTemplate,
  updateCode
}) => {
  return (
    <div key={`showCodeMirror${index}`} class='template-container'>
      <input
        onChange={e => {
          e.preventDefault();
          updateCode(syntaxObject, index, e.target.value);
        }}
        type='text'
        id='changeName'
        value={syntaxObject.name}
      />
      <OnClickShowCodeMirror
        code={syntaxObject.code}
        updateCode={updateCode}
        index={index}
        deleteTemplate={deleteTemplate}
      />
      <br />
    </div>
  );
};
export default CreateCodeEditor;
