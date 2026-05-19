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
    const frierenInfo = 'An elven mage who has lived for over a thousand years and a member of the hero\'s party that defeated the Demon King. After Himmel\'s death, she embarks on a journey to Auereole while learning more about humanity. Seen as rather lazy and carefree by her party, their journey is often side-tracked by Frieren\'s love for collecting magical items and grimoires.'
    const fernInfo = 'A young mage and Frieren\'s disciple. A war orphan adopted by Heiter, she began magic training under Heiter\'s tutelage. Following Heiter\'s death, she now accompanies Frieren on her journey. Often acts as the party\'s mother but can be easily upset by their antics.';
    const starkInfo = 'Stark is the party\'s warrior and Eisen\'s disciple. He is kind-hearted and well-liked by the people who they meet along the way. Highly capable, Stark serves as the front-line fighter of the party.';
    const seinInfo = 'An exceptionally talented priest from a small village. Sein joins Frieren\'s party to search for his best friend, Gorilla Warrior. Despite being a priest, he enjoys alcohol, cigarretes and gambling.';

    const charData = [
        { id: 0, name: 'Frieren', info: frierenInfo, imgSource: splashArt, iconSource: cIcon, alt: 'FrierenImg',},
        { id: 1, name: 'Fern', info: fernInfo, imgSource: splashArt1, iconSource: cIcon1, alt: 'FernImg'},
        { id: 2, name: 'Stark', info: starkInfo, imgSource: splashArt2, iconSource: cIcon2, alt: 'StarkImg'},
        { id: 3, name: 'Sein', info: seinInfo, imgSource: splashArt3, iconSource: cIcon3, alt: 'SeinImg'}
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