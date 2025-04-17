import { createContext, useState } from "react";

export const EditorContext = createContext({
    title: 'defaultTitle',
    color: 'defaultColor',
    footer: 'defaultFooter',
     body: 'defaultBody'
});

const EditorContextProvider = (props) => {

    const [title, setTitle] = useState(' The Magic of Simplicity')
    const [body, setBody] = useState("Sometimes, it's the little things that bring the most joy—a quiet morning, a good book, or a moment of stillness. Life doesn’t need to be complicated to be beautiful. Take a step back, enjoy the simple moments, and watch them light up your world.")
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