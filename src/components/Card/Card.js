import Image from 'next/image';
import './Card.styles.css';

const Card = ({data}) => {
    return ( <div className='m-auto p-4 flex flex-col bg-white card'>
        <div className='p-4 md:p-8 lg:p-4 justify-center'>
            <Image className='mx-auto object-cover xl:w-[300px] aspect-auto' src={data.imgSrc} alt="image-apt-for-context" />
        </div>
        <div className='px-4 font-inter font-extrabold text-2xl text-center'>{data.title}</div>
    </div> );
}
 
export default Card;