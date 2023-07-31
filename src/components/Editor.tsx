// CKEditorComponent.jsx
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-react/dist/ckeditor';
import React from 'react';


const CKEditorComponent = ({ initialValue, onChange } : any) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      data={initialValue}
      onChange={(event : any, editor : any) => {
        const content = editor.getData();
        onChange(content);
      }}
    />
  );
};

export default CKEditorComponent;
