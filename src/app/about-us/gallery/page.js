import Image from 'next/image';
import React from 'react';

const images = require.context('../../../assets/images/gallery', true);
const imageList = images.keys().map(image => images(image));

function ImageGallery() {
  return (
    <main className='flex flex-col gap-4 p-8 lg:flex-row overflow-x-scroll'>
      {imageList.map((image, index) => (
        <Image className='w-[80%] lg:w-[200px] object-contain transition-all duration-150 hover:scale-110 mx-auto' key={index} src={image.default} alt={`image-${index}`} />
      ))}
    </main>
  );
}

export default ImageGallery;


// const GalleryPage = () => {
//     return (<main className="w-full h-full">
// <div className="bg-red-100 w-full h-full">Cutie patootie</div>
// <div className="bg-blue-100 w-full h-full">Cutie patootie</div>
// <div  className="bg-green-100 w-full h-full">Cutie patootie</div>
//     </main> );
// }
 
// export default GalleryPage;