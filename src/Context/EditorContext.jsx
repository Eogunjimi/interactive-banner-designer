import { createContext, useState } from "react";

export const EditorContext = createContext();

const EditorContextProvider = (props) => {

    const [title, setTitle] = useState('Emmanuel')
    const [body, setBody] = useState("Coding has been an exhilarating adventure! Every bug fixed, every challenge solved—it’s like unlocking new levels of creativity.")
    const [footer, setFooter] =useState("Emmanuel Ogunjimi")
    const [color, setColor] = useState('#BB3ECC');

    const contextValue = {
        title, setTitle, color, setColor, body, setBody, footer, setFooter
    }
   
    return(
        <EditorContext.Provider value={contextValue}>
            {props.children}
        </EditorContext.Provider>
    )
}

export default EditorContextProvider;