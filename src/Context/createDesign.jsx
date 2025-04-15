import { useRef } from "react"

const CreateDesign = () => {

    const ref = useRef()
    const {state} = useLocation()

    const obj = {
        name: "main_frame",
        type: "react",
        id:Math.floor((Math.random() * 100) + 1),
        height: state.height,
        width: state.width,
        z_index: 1,
        color: 'green',
        image: ""
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center relative">
            <div ref={ref} className="relative w-auto h-auto overflow-auto">
                <createComponent info={obj} current_component={{}} />
            </div>
        </div>
    )
}