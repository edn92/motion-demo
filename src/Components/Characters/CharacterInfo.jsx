function CharacterInfo(props){
    return (
        <div className="character-info-container">
            <h1>Name: {props.name}</h1>
            <div>{props.info}</div>
        </div>
    );
}

export default CharacterInfo;