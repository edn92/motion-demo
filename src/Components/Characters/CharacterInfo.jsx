function CharacterInfo(props){
    return (
        <div className="character-info-container">
            <div className='character-info'>
                <div className="character-name-div">Name: {props.name}</div>
                <div className="scrollable-div">
                    {props.info}
                </div>
            </div>
        </div>
    );
}

export default CharacterInfo;