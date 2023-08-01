// Modal.jsx

import React, { useState } from "react";

const Modal = ({ onClose, onInsert, option }: any) => {
  const [value, setValue] = useState("");

  const handleInputChange = (event: any) => {
    setValue(event.target.value);
  };

  const handleInsert = () => {
    onInsert(value);
  };

  return (
    <div className="modal z-30 w-[600px]">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2 className="text-xl mb-8 font-semibold">
          Embed {option === "social" ? "Social Media Link" : option}
        </h2>
        {option === "video" && (
          <>
            <label className="block" htmlFor="Video Provider">
              Video Provider
            </label>
            <select
              name="video"
              id="video"
              className="border w-full px-3 rounded-md border-gray-400 py-2"
            >
              <option value="youtube">Youtube</option>
            </select>
          </>
        )}
        {option === "social" && (
          <>
            <label className="block" htmlFor="Video Provider">
              Video Provider
            </label>
            <select
              name="video"
              id="video"
              className="border w-full px-3 rounded-md border-gray-400 py-2"
            >
              <option value="facebook">Facebook</option>
              <option value="twitter">Twitter</option>
              <option value="intagram">Instagram</option>
            </select>
          </>
        )}
        <div className="mt-5">
          <label className="block" htmlFor="">
            URL
          </label>
          <input
            type={option === "social" || option === "video" ? "text" : "file"}
            value={value}
            onChange={handleInputChange}
            className="border px-3 rounded-md border-gray-400 py-2"
          />
        </div>
        {option === "social" && (
          <>
            <label className="block" htmlFor="Video Provider">
              Code
            </label>
            <input
              type="text"
              onChange={handleInputChange}
              className="border px-3 rounded-md border-gray-400 py-2"
            />
          </>
        )}
        <div className="flex items-center gap-x-4 mt-4">
          <button
            onClick={handleInsert}
            className="px-4 py-2 text-white text-sm bg-[#0A7227] rounded-md"
          >
            Embed
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 text-sm border border-[#0A7227] rounded-md text-[#0A7227]"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
