import { useState } from 'react';
import { motion } from 'motion/react';
import SlideImage1 from '../../assets/splash_art.png';
import SlideImage2 from '../../assets/splash_art1.png';
import SlideImage3 from '../../assets/splash_art2.png';
import ArrowIcon from '../../assets/arrow_icon.svg?react';

function Slideshow(){
    const testLongString = 'Loremaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.'
    const testLongString1 = 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.'
    const slideArray = [
        { id: 0, caption: testLongString1, imgSource: SlideImage1, alt: 'slideImageAlt1'},
        { id: 1, caption: 'caption b', imgSource: SlideImage2, alt: 'slideImageAlt2'},
        { id: 2, caption: 'caption c', imgSource: SlideImage3, alt: 'slideImageAlt3'},
        { id: 3, caption: 'caption d', imgSource: SlideImage1, alt: 'slideImageAlt4'},
        { id: 4, caption: 'caption e', imgSource: SlideImage2, alt: 'slideImageAlt5'},
    ];
    const [currentSlide, setCurrentSlide] = useState(slideArray[0]);

    function NextSlide(){
        let nextSlide = currentSlide.id + 1;

        if (nextSlide >= slideArray.length) {
            nextSlide = 0;
        }

        setCurrentSlide(prevSlide => slideArray[nextSlide]);
    }

    function PreviousSlide(){
        let nextSlide = currentSlide.id - 1;

        if (nextSlide < 0) {
            nextSlide = slideArray.length - 1;
        }

        setCurrentSlide(prevSlide => slideArray[nextSlide]);
    }


    function ChangeSlide(id){
        setCurrentSlide(prevSlide => slideArray[id]);
    }
    return (
        <div className='slideshow-container'>
            <div className='slide-container'>
                    <motion.img 
                        key={currentSlide.imgSource} 
                        src={currentSlide.imgSource} 
                        alt={currentSlide.alt}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.5}}/>
                <div className='slide-selector'>
                    {
                        slideArray.map((slide) =>
                            <svg 
                                key={slide.id}
                                className={slide.id === currentSlide.id ? 'svg-icon active' : 'svg-icon'} 
                                viewBox="0 0 50 50" 
                                xmlns="http://www.w3.org/2000/svg"
                                onClick={() => ChangeSlide(slide.id)}>
                                <circle cx="25" cy="25" r="20" />
                            </svg>
                        )
                    }
                </div>
                <div className='caption-div'>
                    {currentSlide.caption}
                </div>
                <button className='previous'>
                    <ArrowIcon className='svg-icon flip-icon larger' onClick={() => PreviousSlide()}/>    
                </button>
                <button className='next'>
                    <ArrowIcon className='svg-icon larger' onClick={() => NextSlide()}/>
                </button>
            </div>
        </div>
    );
}

export default Slideshow;