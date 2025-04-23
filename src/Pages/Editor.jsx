// Import necessary hooks and components
import { useContext } from "react";
import { EditorContext } from "../Context/EditorContext";

// Import icons for UI
import { FaRegEdit } from "react-icons/fa";
import { IoColorPalette } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { FaCloudUploadAlt } from "react-icons/fa";
 




// Editor component
const Editor = () => {
  // Destructuring state values and setters from context
  const { title,
    setTitle,
    body,
    setBody,
    button,
    setButton,
    color,
    setColor,
    setBannerImage
  } = useContext(EditorContext);

  // Handle image file selection and convert it to base64
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBannerImage(reader.result); // Update banner image with base64 string
      };
      reader.readAsDataURL(file); // Read the file as data URL
    }
  };

  return (
    <div className="h-full bg-[#f4f4f4] px-2 w-[300px]">
      {/* Settings Icon */}
      <div className="h-8 bg-white rounded-sm my-2 pt-2 pl-3">
        <FiSettings />
      </div>

      {/* Title Input */}
      <div>
        <div className="flex items-center">
          <FaRegEdit />
          <label className="font-semibold ml-2">Edit Title</label>
        </div>
        <textarea
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-1 rounded-sm w-[220px]"
        />
      </div>

      {/* Body Input */}
      <div>
        <div className="flex items-center mt-4">
          <FaRegEdit />
          <label className="font-semibold ml-2">Edit Body</label>
        </div>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="border-1 rounded-sm w-[220px]"
        />
      </div>

      {/* Footer/Button Text Input */}
      <div>
        <div className="flex items-center mt-4">
          <FaRegEdit />
          <label className="font-semibold ml-2">Edit Footer</label>
        </div>
        <textarea
          required
          value={button}
          onChange={(e) => setButton(e.target.value)}
          className="border-1 rounded-sm w-[220px]"
        />
      </div>

      {/* Background Color Picker */}
      <div className="mt-4">
        <div className="flex items-center">
          <IoColorPalette />
          <label className="font-semibold ml-2">Change BG Color</label>
        </div>
        <input
          type="color"
          required
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="cursor-pointer rounded-sm bg-gray-600 mt-1"
        />
      </div>

      {/* Image Upload */}
      <div className="mt-4">
        <div className="flex items-center">
          <FaCloudUploadAlt />
          <label className="font-semibold ml-2">Upload New Image</label>
        </div>
        <input
          type="file"
          id="imageInput"
          accept="image/*"
          onChange={handleImageChange}
          className="cursor-pointer bg-gray-600 w-[220px] p-3 mt-1"
        />
      </div>
    </div>
  );
};

export default Editor;
