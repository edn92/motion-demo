import { useState, useEffect } from 'react';

import CharacterMenuItem from './CharacterMenuItem';
import CharacterImage from './CharacterImage';
import CharacterInfo from './CharacterInfo';

import splashArt from '../../assets/character_splash.png';
import splashArt1 from '../../assets/character_splash1.png';
import splashArt2 from '../../assets/character_splash2.png';
import splashArt3 from '../../assets/character_splash3.png';

import cIcon from '../../assets/character_icon.png';
import cIcon1 from '../../assets/character_icon1.png';
import cIcon2 from '../../assets/character_icon2.png';
import cIcon3 from '../../assets/character_icon3.png';

import menuSeparator from '../../assets/separator.png';

import LoadingDisplay from '../Loading/LoadingDisplay';

function CharactersPage(){    
    //const testLongString = 'Loremaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.'
    const testLongString = 'Displaying character information here. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.'
    const testLongString1 = 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.'
    
    const charData = [
        { id: 0, name: 'Frieren', info: testLongString, imgSource: splashArt, iconSource: cIcon, alt: 'Frieren',},
        { id: 1, name: 'Fern', info: testLongString1, imgSource: splashArt1, iconSource: cIcon1, alt: 'Fern'},
        { id: 2, name: 'Stark', info: testLongString1, imgSource: splashArt2, iconSource: cIcon2, alt: 'Stark'},
        { id: 3, name: 'Sein', info: testLongString1, imgSource: splashArt3, iconSource: cIcon3, alt: 'Sein'}
    ];

    const [selectedCharacter, setSelectedCharacter] = useState(0);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {//simulate loading
        const delay = Math.floor((Math.random() * 1000) + 100); //random number between 100 and 1100
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, delay)

        return () => clearTimeout(timer);
    }, [])

    function changeCharacter(selectedID){ 
        if (selectedID !== selectedCharacter) {
            setSelectedCharacter(prevSelectedCharacter => selectedID);
        }   
    }

    return (
        <div className='content-container'>
            <div className='character-page-content-container'>
                {
                    isLoading ?
                        <LoadingDisplay message='Simulating loading...' /> : 
                    <>
                        <div className='character-menu-container'>
                            <div className='character-menu-icons'>
                                {
                                    charData.map((item) => 
                                        <CharacterMenuItem 
                                            activeID={selectedCharacter}
                                            key={item.id} 
                                            id={item.id} 
                                            src={item.iconSource} 
                                            name={item.name} 
                                            onClick={() => changeCharacter(item.id)}/>
                                    )
                                }
                            </div>
                            <img className='menu-separator' src={menuSeparator} alt={menuSeparator} />
                        </div>
                        <div className='character-container'>
                            <CharacterImage 
                                id={charData[selectedCharacter].id}
                                imgSrc={charData[selectedCharacter].imgSource} 
                                imgAlt={charData[selectedCharacter].alt}/>
                            <CharacterInfo 
                                name={charData[selectedCharacter].name} 
                                info={charData[selectedCharacter].info}/>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}

export default CharactersPage;