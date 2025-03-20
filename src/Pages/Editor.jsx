import { useContext, useState } from "react";
import { EditorContext } from "../Context/EditorContext";

const Default = <img src="/images/emmanuel.jpg" alt="emmanuel" />;

const Editor = () => {
  // const [title, setTitle] = useState('')

  const { title, setTitle } = useContext(EditorContext);
  const { body, setBody } = useContext(EditorContext);
  const { footer, setFooter } = useContext(EditorContext);
  const { color, setColor } = useContext(EditorContext);

  const [selectedImage, setSelectedImage] = useState(Default);

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
      <div className={`h-50 w-[1000px]`}>
        <form action="">
          <div>
          <label>Edit Title</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-1"
            />
          </div>

          <div>
          <label>Edit Body</label>
            <input
              type="text"
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="border-1"
            />
          </div>

          <div>
          <label>Edit Footer</label>
            <input
              type="text"
              required
              value={footer}
              onChange={(e) => setFooter(e.target.value)}
              className="border-1"
            />
          </div>
         

          <br />
          <label>Color</label>
          <input
            type="color"
            required
            value={color}
            // onChange={handleColorChange}
            onChange={(e) => setColor(e.target.value)}
          />
        </form>

        {/* <div>
          <form>
            <input type="file" accept="image/*" onChange={hanndleFile} />
            <input type="submit" value="submit" />
          </form>
        </div>
        {image} */}

        {/* <div>{selectedImage}</div> */}

        <br />

        {/* Input element to select an image file */}
        <input
          type="file"
          name="myImage"
          // Event handler to capture file selection and update the state
          onChange={(event) => {
            console.log(event.target.files[0]); // Log the selected file
            setSelectedImage(event.target.files[[]]); // Update the state with the selected file
          }}
        />
      </div>
    </>
  );
};

export default Editor;
