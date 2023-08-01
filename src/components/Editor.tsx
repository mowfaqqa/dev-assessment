// CKEditorComponent.jsx

import React, { useState } from "react";
import Modal from "./Modal"; // Create a separate Modal component
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Plus, Image, Video, Link } from "react-feather";

const MAX_WORD_LIMIT = 3000; // Set your desired word limit here

const CKEditorComponent = ({ initialValue, onChange }: any) => {
  const [wordCount, setWordCount] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState<any>();

  const handleEditorChange = (event: any, editor: any) => {
    const content = editor.getData();
    const wordCount = content.split(/\s+/).filter(Boolean).length; // Count words
    setWordCount(wordCount);

    if (wordCount <= MAX_WORD_LIMIT) {
      onChange(content);
    } else {
      // If word limit exceeded, remove the extra words from the content
      const words = content.split(/\s+/).filter(Boolean);
      const newContent = words.slice(0, MAX_WORD_LIMIT).join(" ");
      editor.setData(newContent);
    }
  };

  const handleDropdownClick = (option: any) => {
    setShowDropdown(true);
  };
  const handleButtonClick = (option: any) => {
    setSelectedOption(option);
    setShowDropdown(false);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setShowDropdown(false);
  };

  const handleInsert = (value: any) => {
    const editor = document.querySelector(".ck-editor__editable"); // Get the CKEditor editable element
    let tag = "";

    switch (selectedOption) {
      case "image":
        tag = `<img src="${value}" alt="Image" />`;
        break;
      case "video":
        tag = `<embed type="video" url="${value}" />`;
        break;
      case "social":
        tag = `<a href="${value}" target="_blank" rel="noopener noreferrer">Social Media Link</a>`;
        break;
      default:
        break;
    }

    if (tag) {
      editor!.innerHTML += tag; // Insert the tag into the editor's content
    }

    setShowModal(false);
    setSelectedOption(null);
  };

  return (
    <div className="relative">
      <CKEditor
        editor={ClassicEditor}
        data={initialValue}
        onChange={handleEditorChange}
      />
      <div className="relative flex items-center justify-between">
        <div className="mt-4">
          <button
            className="rounded-full bg-[#E7F1E9] p-2 font-bold"
            onClick={() => handleDropdownClick(showDropdown)}
          >
            {" "}
            <Plus size={18} />{" "}
          </button>
          {showDropdown && (
            <div className="absolute z-20 flex flex-col bg-white shadow-lg w-[350px]">
              <button
                className="py-3 hover:bg-[#E7F1E9] px-4 flex items-center gap-x-5"
                onClick={() => handleButtonClick("image")}
              >
                <span>
                  <Image size={18} />
                </span>
                <span>Insert Image </span>
              </button>
              <button
                className="py-3 px-4 hover:bg-[#E7F1E9] flex items-center gap-x-5"
                onClick={() => handleButtonClick("video")}
              >
                <Video size={18} />
                <span>Embed Video</span>
              </button>
              <button
                className="py-3 px-4 hover:bg-[#E7F1E9] flex items-center gap-x-5"
                onClick={() => handleButtonClick("social")}
              >
                <Link size={18} />

                <span> Social Media Link </span>
              </button>
            </div>
          )}
        </div>
        <div className="text-xs">
          {wordCount} / {MAX_WORD_LIMIT}
        </div>
      </div>
      {showModal && (
        <Modal
          onClose={handleModalClose}
          onInsert={handleInsert}
          option={selectedOption}
        />
      )}
    </div>
  );
};

export default CKEditorComponent;
