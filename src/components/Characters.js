function Characters(props) {
  const { characters, setCharacters} = props;

  const resetCharacter = () => {
    setCharacters(null)
  }

  return (
    <div className="characters">
      <h1>Personajes</h1>
      <div className="container-characters">
        {characters.map((character, index) => (
          <div className="character-container" key={index}>
            <div>
              <img src={character.image} alt={character.name} />
            </div>
            <div>
                <h3>{character.name}</h3>
                <h6>
                    {character.status === "Alive" ? (
                        <>
                        <span className="alive" />
                        Alive
                        </>
                    ):(
                        <>
                            <span className="dead" />
                            Dead
                        </>
                    )}
                </h6>
                <p>
                    <span className="text-gray">Episodes: </span>
                    <span className="text-gray">{character.episode.length}</span>
                </p>
                <p>
                    <span className="text-gray">Specie: </span>
                    <span className="text-gray">{character.species}</span>
                </p>
                <p>
                    <span className="text-gray">Gender: </span>
                    <span className="text-gray">{character.gender}</span>
                </p>
                <p>
                    <span className="text-gray">Origin: </span>
                    <span className="text-gray">{character.location.name}</span>
                </p>
            </div>
          </div>
        ))}
      </div>
      <span className="back-home" onClick={resetCharacter}>Volver</span>
    </div>
  );
}

export default Characters;
