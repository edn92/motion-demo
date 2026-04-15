import { useRef, useEffect, useLayoutEffect, useState } from 'react';
import { motion, useAnimation } from 'motion/react';
import SlideImage1 from '../../assets/splash_art.png';
import SlideImage2 from '../../assets/splash_art1.png';
import SlideImage3 from '../../assets/splash_art2.png';
import SlideImage4 from '../../assets/splash_art3.png';
import SlideImage5 from '../../assets/splash_art4.png';
import ArrowIcon from '../../assets/arrow_icon.svg?react';

function Slideshow(){
    const testLongString = 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.'

    const slidesArray = [
        { id: 0, caption: testLongString, imgSource: SlideImage1, alt: 'slideImageAlt1'},
        { id: 1, caption: 'caption 2', imgSource: SlideImage2, alt: 'slideImageAlt2'},
        { id: 2, caption: 'caption 3', imgSource: SlideImage3, alt: 'slideImageAlt3'},
        { id: 3, caption: 'caption 4', imgSource: SlideImage4, alt: 'slideImageAlt4'},
        { id: 4, caption: 'caption 5', imgSource: SlideImage5, alt: 'slideImageAlt5'},
    ];

    const [currentSlide, setCurrentSlide] = useState(slidesArray[0]);
    const [nextSlide, setNextSlide] = useState(slidesArray[1]);
    const [previousSlide, setPreviousSlide] = useState(slidesArray[slidesArray.length -1]);

    const pSRef = useRef(null); //slide images are the same base width so only need one
    const [slideImageWidth, setSlideImageWidth] = useState(0); //used for animations

    const mainSlideAnims = useAnimation();
    const previousSlideAnims = useAnimation();
    const nextSlideAnims = useAnimation();

    useEffect(() => { //get initial animation calc
        if (pSRef.current){
            setSlideImageWidth(prevSlideImageWidth => pSRef.current.getBoundingClientRect().width);
        }
    }, []);

    
    useEffect(() => { //handle animation calc updates when resizing
        function UpdateImageWidth(){
            setSlideImageWidth(prevSlideImageWidth => pSRef.current.getBoundingClientRect().width);
        }

        //const debounceResize = debounce(UpdateImageWidth, 100) //write debounce function;

        window.addEventListener('resize', UpdateImageWidth)
        return () => window.removeEventListener('resize', UpdateImageWidth);
    }, []);

    function NextSlide(){
        let next = currentSlide.id + 1;

        if (next >= slidesArray.length) {
            next = 0;
        }

        setPreviousSlide(prevPreviousSlide => slidesArray[currentSlide.id]);

        setCurrentSlide(prevCurrentSlide => slidesArray[next]);

        if (next + 1 >= slidesArray.length) {
            setNextSlide(prevNextSlide => slidesArray[0]);
        } else {
            setNextSlide(prevNextSlide => slidesArray[next + 1]);
        }

        setCurrentSlide(prevCurrentSlide => slidesArray[next]);

        HandleAnimations(true);
    }

    function PreviousSlide(){
        let previous = currentSlide.id - 1;

        if (previous < 0) {
            previous = slidesArray.length - 1;
        }

        setNextSlide(prevNextSlide => slidesArray[currentSlide.id]);

        setCurrentSlide(prevCurrentSlide => slidesArray[previous]);

        if (previous - 1 < 0) {
            setPreviousSlide(prevPreviousSlide => slidesArray[slidesArray.length - 1]);
        } else {
            setPreviousSlide(prevPreviousSlide => slidesArray[previous - 1]);
        }
        /*let previous = currentSlide.id - 1;
        if (previous < 1) {
            previous = slides.length; //set to last slade
        }*/
        setCurrentSlide(prevCurrentSlide => slidesArray[previous]);

        HandleAnimations(false);
    }
    
    function ChangeSlide(id){ //selector
        if (id != currentSlide.id){ //prevents from triggering if slide selected is the current one
            let next = id + 1;
            let previous = id -1;
            if (next >= slidesArray.length){
                next = 0; //set to first in array
            }

            if (previous <= 0) {
                previous = slidesArray.length - 1; //set to last in array
            }

            setNextSlide(prevNextSlide => slidesArray[next]);
            setPreviousSlide(prevPreviousSlide => slidesArray[previous]);
            setCurrentSlide(prevCurrentSlide => slidesArray[id]);

            if (id < currentSlide.id){
                HandleAnimations(false);
            } else {
                HandleAnimations(true);
            }
        }
    }

    function OnDragEnd(event, info){
        if (info.delta.x > 0){
            PreviousSlide();
        } 
        if (info.delta.x < 0) {
            NextSlide();
        }
    }

    //handles slide transitions
    function HandleAnimations(direction){
        let mainScale = 1.1;
        let xTranslateValue = slideImageWidth; //current translate is 50% for non main slides
        let transDuration = 0.3;

        mainSlideAnims.set({ 
            scale: 1, 
            x: direction ? xTranslateValue : -xTranslateValue,//  opacity: 1,
            zIndex: 0 });
        mainSlideAnims.start({
            scale: mainScale,
            x: 0,//  opacity: 1,
            zIndex: 1,
            transition: {duration: transDuration}
        });

        nextSlideAnims.set({
            scale: direction ? 1 : mainScale,
            x: direction ? xTranslateValue : (-1 * xTranslateValue),//  opacity: 1,
            zIndex: direction ? 1 : 0
        })
        nextSlideAnims.start({
            scale: 1,
            x: (-xTranslateValue/2),//  opacity: 1,
            zIndex: 0,
            transition: {duration: transDuration}
        })

        previousSlideAnims.set({ 
            scale: direction ? mainScale : 1,
            x: direction ? (1 * xTranslateValue) : -xTranslateValue,//  opacity: 1,
            zIndex: direction ? 0 : 1
        })
        previousSlideAnims.start({
            scale: 1,
            x: (xTranslateValue/2),//  opacity: 1,
            zIndex: 0,
            transition: {duration: transDuration}
        })
    }

    return (
        <div className='slideshow-container'>
                <div className='slide-images-container'>
                    <motion.ul
                            drag='x' 
                            dragDirectionLock 
                            dragElastic={0.1}
                            dragConstraints = {{ left: -1, right: 1}}
                            whileDrag={{
                                cursor:'grabbing'
                            }}
                            onDragEnd={OnDragEnd}>
                        <motion.li
                            className='previous-slide'
                            animate={previousSlideAnims}>
                            <img
                                ref={pSRef} 
                                className='previous-img'
                                src={previousSlide.imgSource}
                                alt={previousSlide.alt}
                                draggable={false}
                                onClick={() => PreviousSlide()}/>
                        </motion.li>
                        <motion.li
                            className='main-slide'
                            initial={{scale: 1.1}}
                            animate={mainSlideAnims}>
                            <img 
                                src={currentSlide.imgSource}
                                alt={currentSlide.alt}
                                draggable={false}/>
                        </motion.li>
                        <motion.li
                            className='next-slide'
                            animate={nextSlideAnims}>
                            <img 
                                className='next-img'
                                src={nextSlide.imgSource}
                                alt={nextSlide.alt}
                                draggable={false}
                                onClick={() => NextSlide()}/>
                        </motion.li>
                    </motion.ul>
                </div>
                    <div className='slides-selector-container'>
                        <button>
                            <ArrowIcon className='svg-icon flip-icon thumbnail-buttons' onClick={() => PreviousSlide()}/>  
                        </button>
                        {
                            slidesArray.map((slide) =>
                                <svg 
                                    key={slide.id}
                                    className={slide.id === currentSlide.id ? 'svg-icon active' : 'svg-icon'}
                                    viewBox='0 0 50 50'
                                    onClick={() => ChangeSlide(slide.id)}>
                                    <circle cx='24' cy='24' r='20'/>
                                </svg>
                            )
                        }
                        <button>
                            <ArrowIcon className='svg-icon thumbnail-buttons' onClick={() => NextSlide()}/>
                        </button>
                    </div>
                    <div className='caption-container'>
                        {currentSlide.caption}
                    </div>
        </div>
    );
}

export default Slideshow;