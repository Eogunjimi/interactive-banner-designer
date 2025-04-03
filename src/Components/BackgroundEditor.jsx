import { useContext, useState } from "react";
import { EditorContext } from "../Context/EditorContext";
import { IoColorPalette } from "react-icons/io5";


const BackgroundEditor = () => {
  const { color, setColor } = useContext(EditorContext);


    return (
        <>
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
                    className="cursor-pointer rounded-sm"
                />
            </div>
        </>
    )
}

export default BackgroundEditor