const ImageUploader = () => {

    return (
        <>
            <div className=" bg-purple-600 flex justify-center items-center rounded-md text-white cursor-pointer">
                <label htmlFor="image">Upload Image</label>
                <input type="file" id="image" className="hidden" />
            </div>
        </>
    )
}

export default ImageUploader