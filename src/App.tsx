import "./App.css";
import React, { useState } from "react";
import CKEditorComponent from "./components/Editor";

const App = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("<p>Hello from CKEditor!</p>");

  const handleTitleChange = (event : any) => {
    setTitle(event.target.value);
  };

  const handleEditorChange = (newContent: any) => {
    setContent(newContent);
  };

  const handleSubmit = () => {
    // Here, you can submit the title and content to your backend or take any other actions.
    console.log("Title:", title);
    console.log("Content:", content);
  };

  return (
    <div className="App">
      <h2>Add Post Title</h2>
      <input type="text" value={title} onChange={handleTitleChange} />

      <h2>Add Post Content</h2>
      <CKEditorComponent initialValue={content} onChange={handleEditorChange} />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default App;
