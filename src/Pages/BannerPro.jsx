import { useState } from "react"
// import Banner from "./Banner"


const [state, setSate] = useState()
const [current_component, setCurrentComponent] = useState('')
const [components, setComponents] = useState([
    {
        name: "main_frame",
        type: "rect",
        id: Math.floor((Math.random() * 100) + 1),
        height: 500,
        width: 650,
        z_index: 1,
        color: '#fff',
        image: "",
        setCurrentComponent: (a) => setCurrentComponent(a)
    }
])


const moveElement = () => {
    console.log('move element')
}

const resizeElement = () => {
    console.log('resize element')
}

const rotateElement = () => {
    console.log('rotate   element')
}

const removeComponent = () => {
    console.log('remove component')
}

const BannerPro = () => {

    return (
        <>
            <div className="w-full flex h-full">
                <div className={`flex justify-center relative items-center h-full ${!current_component ? 'w-full' : 'w-[calc(100%-250px)]overflow-hidden'}`}>
                  <div className="m-w-[650px] m-h[500px] flex justify-center items-center overflow-hidden">
                    <div id='main_design' className="w-auto relative h-auto overflow-hidden">
                    {
                        components.map((c, i) => <CreateComponent/> )
                    }
                    </div>
                  </div>
                </div>
            </div>

        </>
    )
}

export default BannerPro



// {/* <div className="bg-red-600 h-full flex justify-center items-center  ">
//     <div className=" h-[400px]  w-[600px] pb-10"> */}
//         {/* the main banner itself */}

//         {/* <Banner/> */}
//         {/* <div className="flex justify-center items-center bg-purple-600 h-full w-full">
//         </div>

//     </div>
// </div> */}