import React from 'react'

const ImageUploader = () => {

      // const changeBannerImage = (e) => {
      //   const file = e.target.files?.[0];
      //   if (file) {
      //     const reader = new FileReader();
      //     reader.onload = (e) => {
      //       updateSettings({ customImage: e.target?.result });
      //     };
      //     reader.readAsDataURL(file);
      //   }
      // };


  return (
    <div className='h-50 w-50
     bg-green-600 border-3
      border-red-600   
      flex-shrink-0
      flex items-center justify-center relative mr-4
      ' 

    aria-label="Placeholder image">
        {/* image placeholder, holds the image uploader and display */}
         
       <input 
       type="file"
      //  className='hidden'
       id='image'
       accept='image/*'
       />



       {

        
       }
       
    </div>
  )
}

export default ImageUploader
