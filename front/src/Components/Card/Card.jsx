import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { removeFavorite } from "../../Redux/actions";
import axios from "axios";

function Card({
  id,
  species,
  name,
  image,
  gender,
  onClose,
  removeFavorite,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);

  const addFavorite = (char) => {
    axios
      .post("http://localhost:3001/rickandmorty/fav", char)
      .then((res) => console.log("0k"));
  };

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavorite(id);
    } else {
      setIsFav(true);
      addFavorite({ id, species, name, image, gender });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button onClick={() => onClose(id)}>X</button>
      <br />

      <img src={image} alt="" />
      <Link to={`/detail/${id}`}>
        <h3>{name}</h3>
      </Link>
      <h5>
        <span>{species}</span>
        <span>{gender}</span>
      </h5>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFavorite: (id) => {
      dispatch(removeFavorite(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
