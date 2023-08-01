import React, { useState } from "react";
import CKEditorComponent from "./components/Editor";
import "./App.css";

const App = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (event: any) => {
    setTitle(event.target.value);
  };

  const handleEditorChange = (newContent: any) => {
    setContent(newContent);
  };

  const handleSubmit = () => {
    //
    console.log("Title:", title);
    console.log("Content:", content);
  };

  return (
    <div className="App max-w-4xl mx-auto mt-6">
      <h2 className="text-2xl font-bold my-2">
        {title === "" ? "Add Post Title" : title}
      </h2>
      <input
        type="text"
        className="w-full px-3 border border-gray-300 py-1 rounded-md"
        value={title}
        onChange={handleTitleChange}
        placeholder="enter title here"
      />

      <CKEditorComponent initialValue={content} onChange={handleEditorChange} />
      <div className="flex justify-end">
        <button
          className=" mt-2 px-4 py-2 text-white text-sm bg-[#0A7227] rounded-md"
          onClick={handleSubmit}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default App;
