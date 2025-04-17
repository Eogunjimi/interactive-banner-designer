 import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import EditorContextProvider from './Context/EditorContext.jsx'
import ImageUploader from './ImageUploader.jsx'
import NewAds from './NewAds.jsx'

createRoot(document.getElementById('root')).render(

<EditorContextProvider>
   <App />
</EditorContextProvider>

)



{/* <ImageUploader/> */} 

 