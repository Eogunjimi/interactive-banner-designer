import { useContext, useState } from "react";
import { EditorContext } from "../Context/EditorContext";
import { FaRegEdit } from "react-icons/fa";
import { IoColorPalette } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";


const Default = <img src="/images/emmanuel.jpg" alt="emmanuel" />;

const Editor = () => {
  // const [title, setTitle] = useState('')

  const { title, setTitle } = useContext(EditorContext);
  const { body, setBody } = useContext(EditorContext);
  const { footer, setFooter } = useContext(EditorContext);
  const { color, setColor } = useContext(EditorContext);

  //   const [selectedImage, setSelectedImage] = useState(Default);

  //   const [image, setImage] = useState(Default);

  //   const hanndleFile = (e) => {
  //     const file = e.target.files[0];
  //     if (file) {
  //       const reader = new FileReader();
  //       reader.onloadend = () => {
  //         setImage(reader.result);
  //       };
  //       reader.readAsDataURL(file);
  //     }
  //   };

  //  const savedColor = localStorage.getItem('savedColor');
  //     return savedColor || '#ffffff'

  // const handleColorChange = (e) => {
  //     const newColor = e.target.value;
  //     setColor(newColor);
  //     localStorage.setItem('savedColor', newColor);
  // }
  return (
    <>
      <div className={`h-50  bg-[#f4f4f4] px-2`}>
        <div className="h-8 bg-white rounded-sm my-2 pt-2 pl-3">
        <FiSettings/>
        </div>

        <form action="" className=" justify-between">
          <div>
            <div className="flex items-center">
              <FaRegEdit />
              <label className="font-semibold">Edit Title</label>
            </div>

            <textarea
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-1"
            />
          </div>

          <div>
            <div className="flex items-center">
              <FaRegEdit />
              <label className="font-semibold">Edit Body</label>
            </div>

            <textarea
              type="text"
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="border-1"
            />
          </div>

          <div>
            <div className="flex items-center">
              <FaRegEdit />
              <label className="font-semibold">Edit Footer</label>
            </div>
            <textarea
              type="text"
              required
              value={footer}
              onChange={(e) => setFooter(e.target.value)}
              className="border-1"
            />
          </div>

          <div className="">
            <div className="flex items-center">
              <IoColorPalette />
              <label className="font-semibold">Pick Bg Color</label>
            </div>

            <input
              type="color"
              required
              value={color}
              // onChange={handleColorChange}
              onChange={(e) => setColor(e.target.value)}
              className="cursor-pointer"
            />
          </div>
        </form>

        {/* <div>
          <form>
            <input type="file" accept="image/*" onChange={hanndleFile} />
            <input type="submit" value="submit" />
          </form>
        </div>
        {image} */}

        {/* <div>{selectedImage}</div> */}
        {/* Input element to select an image file */}
        {/* <input
          type="file"
          name="myImage"
          // Event handler to capture file selection and update the state
          onChange={(event) => {
            console.log(event.target.files[0]); // Log the selected file
            setSelectedImage(event.target.files[[]]); // Update the state with the selected file
          }}
        /> */}
      </div>
    </>
  );
};

export default Editor;
