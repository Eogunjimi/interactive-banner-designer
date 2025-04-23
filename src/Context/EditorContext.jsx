import { createContext, useState } from "react";
const defaultImage = 'images/keyboard.jpg'

export const EditorContext = createContext({
    title: 'defaultTitle',
    color: 'defaultColor',
    footer: 'defaultFooter',
    body: 'defaultBody'
});

const EditorContextProvider = (props) => {

    const [title, setTitle] = useState('A Code Fanatic,');
    const [body, setBody] = useState("Crafting logic into elegant solutions, Building digital worlds with keystrokes,The thrill of a program flawlessly running. ");
    const [button, setButton] = useState("LEARN MORE");
    const [color, setColor] = useState('#EADCDC');
    const [bannerImage, setBannerImage] = useState(defaultImage);



    const contextValue = {
        title,
        setTitle, 
        color, 
        setColor, 
        body, 
        setBody, 
        button, 
        setButton,
        bannerImage,
        setBannerImage
    }

    return (
        <EditorContext.Provider value={contextValue}>
            {props.children}
        </EditorContext.Provider>
    )
}

export default EditorContextProvider;