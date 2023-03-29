import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const URL_BASE = "http://localhost:3001/rickandmorty";
  // const URL_BASE = "https://be-a-rym.up.railway.app/api";
  // const KEY = "9d97e1f1346d.2db9fae612b2d7eede69";

  const [character, setCharacter] = useState({});

  const { detailId } = useParams();
  useEffect(() => {
    fetch(`${URL_BASE}/detail/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, []);

  // console.log(params);
  // console.log(params.detailId);

  return (
    <div>
      {character.name ? (
        <div>
          <h2>Nombre: {character.name}</h2>
          <p>Status: {character.status}</p>
          <p>Specie: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Origin: {character.origin?.name}</p>
          <img src={character.image} alt="" />
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Detail;

// Name
// Status
// Specie
// Gender
// Origin
// Image
